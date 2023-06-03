const { prisma } = require ("../data/database");

const resolvers = {
    Data: {
        id: (parent, args, context, info) => parent.id,
        name: (parent) => parent.name,
    },

    Query: {
        allData: (parent, args) => {
            return prisma.data.findMany({
                take: 50
            });
        },
        data: (parent, args) => {
            return prisma.data.findFirst({
                where: {id: +args.id}
            })
        }
    },

    Mutation: {
        registerData: (parent, args) => {
            return prisma.data.create({
                data: {
                    name: args.name
                }
            })
        },
        updateData: (parent, args) => {
           return prisma.data.update({
               where: {
                   id: +args.id
               },
               data: {
                   name: args.name
               }
           });
        },
    }

}

module.exports = {
    resolvers,
}