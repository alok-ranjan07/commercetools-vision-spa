import mutation from "./mutation/mutation.js";
import query from "./query/query.js";

const resolvers = {
  Query: query,
  Mutation: mutation,
};
export default resolvers;
