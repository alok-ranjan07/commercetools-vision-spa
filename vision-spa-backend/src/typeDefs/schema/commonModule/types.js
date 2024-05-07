const types = `
type Initiator{
    isPlatformClient: Boolean
    externalUserId: String
    anonymousId: String
    attributedTo: Attribution
    clientId: String
    customerRef: Reference
    userRef: Reference
    associateRef: Reference
}

type Money {
    type: String!
    currencyCode: Currency!
    centAmount: Long!
    fractionDigits: Int!
}

input MoneyInput{
    currencyCode: Currency!
    centAmount: Int!
}

type BaseMoney{
    type: String!
    currencyCode: Currency!
    centAmount: Long!
    fractionDigits: Int!
}

type Reference{
    typeId: String!
    id: String!
}

input ResourceIdentifierInput{
    typeId: String
    id: String
    key: String
}

type ResponseTypeId{
    id: String!
    type: String!
}

type KeyReference{
    typeId: String!
    key: String!
}

type Attribution{
    clientId: String
    source: AttributionSource!
    userRef: Reference
}

type LocalizedString{
    locale: Locale!
    value: String!
}

type FieldType{
    name: String!
}

type Geometry{
    type: String!
}

type ReviewRatingStatistics{
    averageRating: Float!
    highestRating: Int!
    lowestRating: Int!
    count: Long!
    ratingsDistribution: Json!
}

type AttributeDefinitionType{
    name: String!
}

type AssetDimensions{
    width: Int!
    height: Int!

}

type AttributeDefinition{
    type: AttributeDefinitionType!
    name: String!
    label(locale: Locale, acceptLanguage: [Locale!]): String
    isRequired: Boolean!
    attributeConstraint: AttributeConstraint!
    inputTip(locale: Locale, acceptLanguage: [Locale!]): String
    inputHint: TextInputHint!
    isSearchable: Boolean!
    labelAllLocales: [LocalizedString!]!
    inputTipAllLocales: [LocalizedString!]
}

type AttributeDefinitionResult{
    limit: Int
    offset: Int
    total: Int!
    results: [AttributeDefinition!]!
}

type AssetSource{
    uri: String!
    key: String
    dimensions: AssetDimensions
    contentType: String
}

type Asset{
    id: String!
    key: String
    sources: [AssetSource!]!
    name(locale: Locale, acceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    description(locale: Locale, acceptLanguage: [Locale!]): String
    descriptionAllLocales: [LocalizedString!]
    tags: [String!]!
    custom: CustomFieldsType
}

type SuggestTokenizer{
    type: String!
}

type SearchKeyword{
    text: String!
    suggestTokenizer: SuggestTokenizer
}

type SearchKeywords{
    locale: Locale!
    searchKeywords: [SearchKeyword!]!
}


type Dimensions{
    width: Int!
    height: Int!
}

type Image{
    url: String!
    dimensions: Dimensions!
    label: String
}

type ReviewRatingStatistics{
    averageRating: Float!
    highestRating: Int!
    lowestRating: Int!
    count: Long!
    ratingsDistribution: Json!
}

type ProductVariantSelection{
    type: String!
    skus: [String!]!
}

type ProductVariantExclusion{
    skus: [String!]!
}

`;
export default types;
