import customer from "./customer.js";

const schema = `
${customer}

type LoginResponse {
customer: Customer
access-token: String
error: String
}
`;
export default schema;

//enum
//interface
//types
//customtypes
//category

//address
// productvariant
// product
//store

//customer
