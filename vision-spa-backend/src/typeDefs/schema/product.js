const product = `

type ProductTypeDefinition implements Versioned, ReferenceExpandable{
    key: String
    name: String!
    description: String!
    attributeDefinitions(
    includeNames: [String!]
    excludeNames: [String!]
    limit: Int
    offset: Int
    sort: [String!]
    ): AttributeDefinitionResult!
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

type CategoryOrderHint{
    categoryId: String!
    orderHint: String!
}

type ProductData{
    name(locale: LocaleacceptLanguage: [Locale!]): String
    description(locale: LocaleacceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    descriptionAllLocales: [LocalizedString!]
    slug(locale: LocaleacceptLanguage: [Locale!]): String
    slugAllLocales: [LocalizedString!]!
    categoryOrderHint(categoryId: String!): String
    categoryOrderHints: [CategoryOrderHint!]!
    categoriesRef: [Reference!]!
    categories: [Category!]!
    searchKeyword(locale: Locale!): [SearchKeyword!]
    searchKeywords: [SearchKeywords!]!
    metaTitle(locale: LocaleacceptLanguage: [Locale!]): String
    metaTitleAllLocales: [LocalizedString!]
    metaKeywords(locale: LocaleacceptLanguage: [Locale!]): String
    metaKeywordsAllLocales: [LocalizedString!]
    metaDescription(locale: LocaleacceptLanguage: [Locale!]): String
    metaDescriptionAllLocales: [LocalizedString!]
    masterVariant: ProductVariant!
    variants(
    skus: [String!]
    isOnStock: Boolean
    stockChannelIds: [String!]
    hasImages: Boolean
    ): [ProductVariant!]!
    allVariants(
    skus: [String!]
    isOnStock: Boolean
    stockChannelIds: [String!]
    hasImages: Boolean
    ): [ProductVariant!]!
    variant(sku: Stringkey: String): ProductVariant
    skus: [String!]!
}

type ProductCatalogData{
    current: ProductData
    staged: ProductData
    published: Boolean!
    hasStagedChanges: Boolean!
}

type ProductVariantSelection{
    type: String!
    skus: [String!]!
}

type ProductVariantExclusion{
    skus: [String!]!
}

type SelectionOfProduct{
    productSelectionRef: Reference!
    productSelection: ProductSelection
    variantSelection: ProductVariantSelection
    variantExclusion: ProductVariantExclusion
    createdAt: DateTime!
    lastModifiedAt: DateTime!
}

type SelectionOfProductQueryResult{
    offset: Int!
    count: Int!
    total: Long!
    exists: Boolean!
    results: [SelectionOfProduct!]!
}

type Product implements Versioned, ReviewTarget, ReferenceExpandable{
    id: String!
    key: String
    version: Long!
    productTypeRef: Reference!
    productType: ProductTypeDefinition
    masterData: ProductCatalogData!
    skus: [String!]!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    stateRef: Reference
    state: State
    priceMode: PriceMode
    taxCategoryRef: Reference
    taxCategory: TaxCategory
    reviewRatingStatistics: ReviewRatingStatistics
    productSelectionRefs(
    where: String
    sort: [String!]
    limit: Int
    offset: Int
    ): SelectionOfProductQueryResult!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

`;

export default product;
