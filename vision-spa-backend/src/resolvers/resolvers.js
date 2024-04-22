const resolvers = {
  Query: {
    login: (_, { name, password }, context) => {
      return { email: name };
    },
  },
};
export default resolvers;
