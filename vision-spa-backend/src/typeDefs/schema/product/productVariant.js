const productVariant = `

type DiscountedProductPriceValue{
    value: BaseMoney!
    discountRef: Reference!
    discount: ProductDiscount
}

type ProductPriceTier{
    minimumQuantity: Int!
    value: BaseMoney!
}
type ProductPrice{
    id: String
    value: BaseMoney!
    key: String
    country: Country
    customerGroup: CustomerGroup
    customerGroupRef: Reference
    channel: Channel
    channelRef: Reference
    validFrom: DateTime
    validUntil: DateTime
    discounted: DiscountedProductPriceValue
    tiers: [ProductPriceTier!]
    custom: CustomFieldsType
}

type ProductVariantAvailability{
    isOnStock: Boolean!
    restockableInDays: Int
    availableQuantity: Long
    version: Long
    id: String
}

type ProductVariantAvailabilityWithChannel{
    channelRef: Reference!
    channel: Channel
    availability: ProductVariantAvailability!
}

type ProductVariantAvailabilitiesResult{
    limit: Int
    offset: Int
    total: Int!
    results: [ProductVariantAvailabilityWithChannel!]!
}

type ProductVariantAvailabilityWithChannels{
    noChannel: ProductVariantAvailability
    channels(includeChannelIds: [String!], excludeChannelIds: [String!], limit: Int, offset: Int): ProductVariantAvailabilitiesResult!
}

type RawProductAttribute{
    name: String!
    value: Json!
    attributeDefinition: AttributeDefinition
    referencedResource: ReferenceExpandable
    referencedResourceSet: [ReferenceExpandable!]!
}

type ProductVariant{
    id: Int!
    key: String
    sku: String
    prices: [ProductPrice!]
    price(currency: Currency!, country: Country, customerGroupId: String, channelId: String, date: DateTime): ProductPrice
    images: [Image!]!
    assets: [Asset!]!
    availability: ProductVariantAvailabilityWithChannels
    attributesRaw(includeNames: [String!], excludeNames: [String!]): [RawProductAttribute!]!
}

`;

export default productVariant;
