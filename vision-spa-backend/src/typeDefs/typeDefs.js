import { gql } from "apollo-server";
import { customScalars } from "./customScalars.js";
import query from "./query/query.js";
import mutation from "./mutation/mutation.js";
import schema from "./schema/schema.js";

const typeDefs = gql`
  ${Object.values(customScalars)
    .map((scalar) => {
      `scalar ${scalar.name}`;
    })
    .join("\n")}

  ${schema}
  ${query}
`;

export default typeDefs;
