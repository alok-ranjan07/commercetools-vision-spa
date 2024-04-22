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

type Reference{
    typeId: String!
    id: String!
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

type KeyReference{
    typeId: String!
    key: String!
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
    label(locale: LocaleacceptLanguage: [Locale!]): String
    isRequired: Boolean!
    attributeConstraint: AttributeConstraint!
    inputTip(locale: LocaleacceptLanguage: [Locale!]): String
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
    name(locale: LocaleacceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    description(locale: LocaleacceptLanguage: [Locale!]): String
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
`;
export default types;
