const taxCategory = `

type TaxPortion{
    rate: Float!
    amount: Money!
    name: String

}

type TaxedPrice{
    totalNet: Money!
    totalGross: Money!
    taxPortions: [TaxPortion!]!
    totalTax: Money
}

type TaxedItemPrice{
    totalNet: Money!
    totalGross: Money!
    taxPortions: [TaxPortion!]!
    totalTax: Money
}

type MethodTaxRate{
    shippingMethodKey: String!
    taxRate: TaxRate
}

type MethodTaxedPrice{
    shippingMethodKey: String!
    taxedPrice: TaxedItemPrice
}

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

type TaxCategory implements Versioned & ReferenceExpandable{
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
