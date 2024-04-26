const query = `
type Query{
    customerLogin(email: String!, password: String!): LoginResponse!
}
`;
export default query;
