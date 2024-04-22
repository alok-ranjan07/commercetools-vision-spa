const productSelection = `

type ProductVariantSelection{
    type: String!
    skus: [String!]!
}

type ProductVariantExclusion{
    skus: [String!]!
}

type ProductOfSelection{
    productRef: Reference!
    product: Product
    variantSelection: ProductVariantSelection
    variantExclusion: ProductVariantExclusion
}

type ProductOfSelectionQueryResult{
    offset: Int!
    count: Int!
    total: Long!
    exists: Boolean!
    results: [ProductOfSelection!]!
}

type ProductSelection implements Versioned{
    key: String
    name(locale: LocaleacceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    productRefs(
    where: String
    sort: [String!]
    limit: Int
    offset: Int
    ): ProductOfSelectionQueryResult!
    productCount: Int!
    custom: CustomFieldsType
    mode: ProductSelectionMode!
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

`;

export default productSelection;
