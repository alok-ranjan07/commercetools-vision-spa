import { gql } from "apollo-server";
import query from "./query/query.js";
import mutation from "./mutation/mutation.js";
import schema from "./schema/schema.js";

const typeDefs = gql`
  ${schema}
  ${query}
  ${mutation}
`;

export default typeDefs;
