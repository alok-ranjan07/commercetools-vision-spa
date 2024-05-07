const query = `

type Query{
    customers(where: String, sort: [String!], expand: [String!], limit: Int, offset: Int,  withTotal: Boolean, storeKey: KeyReferenceInput): CustomerQueryResponse!
}
`;
export default query;
