const enums = `

enum AttributionSource{
    Export
    Import
}

enum AuthenticationMode{
    ExternalAuth
    Password
}

enum TextInputHint{
    SingleLine
    MultiLine
}

enum ChannelRole{
    InventorySupply
    ProductDistribution
    ProductDistribution
    OrderImport
    Primary
}

enum ProductSelectionMode{
    Individual
    IndividualExclusion
}

enum AttributeConstraint{
    None
    Unique
    CombinationUnique
    SameForAll
}

enum PriceMode{
    Embedded
    Standalone
}

enum StateType{
    LineItemState
    OrderState
    PaymentState
    ProductState
    QuoteRequestState
    QuoteState
    ReviewState
    StagedQuoteState
}

enum StateRole{
    Return
    ReviewIncludedInStatistics
}
`;
export default enums;
