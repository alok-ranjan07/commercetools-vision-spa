const taxCategory = `
type SubRate{
    name: String!
    amount: Float!
}

type TaxRate{
    name: String!
    amount: Float!
    includedInPrice: Boolean!
    country: Country!
    state: String
    id: String
    key: String
    subRates: [SubRate!]!
}

type TaxCategory implements Versioned, ReferenceExpandable{
    name: String!
    description: String
    rates: [TaxRate!]!
    key: String
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

`;

export default taxCategory;
