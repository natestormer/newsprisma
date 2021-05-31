import { Context } from "./context"

export const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "hi!"
    },
    feed: (parent, { data: { id } }, { prisma }: Context) =>
      prisma.feed.findUnique({ where: { id } }),
    feeds: async (parent, args, { prisma }: Context) => prisma.feed.findMany(),
  },
  Mutation: {
    createFeed: async (parent, { data }, { prisma, user }) => {
      const result = await prisma.feed.create({ data: { ...data } })
      return result
    },
  },
}
