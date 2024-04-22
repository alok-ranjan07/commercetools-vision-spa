const query = `
type Query{
    login(email: String!, password: String!): LoginResponse!
}
`;
export default query;
