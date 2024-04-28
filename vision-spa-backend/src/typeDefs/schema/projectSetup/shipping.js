const shipping = `

type Shipping{
    shippingKey: String
    shippingInfo: ShippingInfo
    shippingAddress: Address
    shippingRateInput: ShippingRateInput
    shippingCustomFields: CustomFieldsType
}

type ShippingRateInput{
    type: String!
}

type ShippingInfo{
    shippingMethodName: String!
    price: Money!
    shippingRate: ShippingRate!
    taxRate: TaxRate
    deliveries: [Delivery!]!
    discountedPrice: DiscountedLineItemPrice
    shippingMethodState: ShippingMethodState!
    shippingMethod: ShippingMethod
    shippingMethodRef: Reference
    taxCategory: TaxCategory
    taxCategoryRef: Reference
    taxedPrice: TaxedItemPrice
}

type ShippingMethod implements Versioned & ReferenceExpandable{
    name: String!
    zoneRates: [ZoneRate!]!
    isDefault: Boolean!
    predicate: String
    key: String
    taxCategoryRef: Reference
    localizedDescriptionAllLocales: [LocalizedString!]
    localizedNameAllLocales: [LocalizedString!]
    localizedDescription(locale: Locale, acceptLanguage: [Locale!]): String
    localizedName(locale: Locale, acceptLanguage: [Locale!]): String
    taxCategory: TaxCategory
    custom: CustomFieldsType
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

type DiscountedLineItemPrice{
    value: BaseMoney!
    includedDiscounts: [DiscountedLineItemPortion!]!
}

type DiscountedLineItemPortion{
    discount: CartDiscount
    discountRef: Reference!
    discountedAmount: BaseMoney!
}

type ShippingRate{
    price: Money!
    freeAbove: Money
    isMatching: Boolean
    tiers: [ShippingRatePriceTier!]!
}

type ShippingRatePriceTier{
    type: String!
}

type Delivery{
    id: String!
    key: String
    createdAt: DateTime!
    items: [DeliveryItem!]!
    parcels: [Parcel!]!
    address: Address
    custom: CustomFieldsType
}

type DeliveryItem{
    id: String!
    quantity: Long!
}

type Parcel{
    id: String!
    key: String
    createdAt: DateTime!
    measurements: ParcelMeasurements
    trackingData: TrackingData
    items: [DeliveryItem!]!
    custom: CustomFieldsType
}

type ParcelMeasurements{
    heightInMillimeter: Int
    lengthInMillimeter: Int
    widthInMillimeter: Int
    weightInGram: Int
}

type TrackingData{
    trackingId: String
    carrier: String
    provider: String
    providerTransaction: String
    isReturn: Boolean!
}


`;

export default shipping;
