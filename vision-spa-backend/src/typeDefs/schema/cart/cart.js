const cart = `
type ItemState{
    quantity: Long!
    stateRef: Reference!
    state: State
}

type DiscountedLineItemPriceForQuantity{
    quantity: Long!
    discountedPrice: DiscountedLineItemPrice!
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

type ItemShippingTarget{
    addressKey: String!
    quantity: Long!
    shippingMethodKey: String
}

type ItemShippingDetails{
    targets: [ItemShippingTarget!]!
    valid: Boolean!
}


type LineItem{
    id: String!
    key: String
    productId: String!
    productKey: String
    name(locale: Locale, acceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    productSlug(locale: Locale, acceptLanguage: [Locale!]): String
    productSlugAllLocales: [LocalizedString!]
    productType: ProductTypeDefinition
    productTypeRef: Reference
    variant: ProductVariant
    price: ProductPrice!
    taxedPrice: TaxedItemPrice
    totalPrice: Money
    quantity: Long!
    addedAt: DateTime
    lastModifiedAt: DateTime
    state: [ItemState!]!
    taxRate: TaxRate
    supplyChannel: Channel
    supplyChannelRef: Reference
    distributionChannel: Channel
    distributionChannelRef: Reference
    discountedPricePerQuantity: [DiscountedLineItemPriceForQuantity!]!
    lineItemMode: LineItemMode!
    priceMode: LineItemPriceMode!
    custom: CustomFieldsType
    inventoryMode: InventoryMode
    shippingDetails: ItemShippingDetails
    perMethodTaxRate: [MethodTaxRate!]!
    taxedPricePortions: [MethodTaxedPrice!]!
}

type CustomLineItem{
    id: String!
    key: String
    name(locale: Locale, acceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    money: BaseMoney!
    totalPrice: Money!
    slug: String!
    quantity: Long!
    state: [ItemState!]!
    taxCategory: TaxCategory
    taxCategoryRef: Reference
    taxRate: TaxRate
    taxedPrice: TaxedItemPrice
    taxedPricePortions: [MethodTaxedPrice!]!
    perMethodTaxRate: [MethodTaxRate!]!
    discountedPricePerQuantity: [DiscountedLineItemPriceForQuantity!]!
    custom: CustomFieldsType
    shippingDetails: ItemShippingDetails
    priceMode: CustomLineItemPriceMode!
}

type DiscountedTotalPricePortion{
    discount: CartDiscount
    discountRef: Reference!
    discountedAmount: BaseMoney!
}

type DiscountOnTotalPrice{
    discountedAmount: BaseMoney!
    includedDiscounts: [DiscountedTotalPricePortion!]!
    discountedNetAmount: BaseMoney
    discountedGrossAmount: BaseMoney
}

type DirectDiscount{
    id: String!
    value: CartDiscountValue!
    target: CartDiscountTarget
}

type AssociateRole implements Versioned & ReferenceExpandable{
    key: String!
    buyerAssignable: Boolean!
    name: String
    permissions: [Permission!]!
    custom: CustomFieldsType
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

type AssociateRoleAssignment{
    associateRoleRef: KeyReference
    associateRole: AssociateRole!
    inheritance: AssociateInheritanceMode!
}

type Associate{
    associateRoleAssignments: [AssociateRoleAssignment!]!
    customerRef: Reference
    customer: Customer
}

type InheritedAssociateRoleAssignment{
    associateRoleRef: KeyReference!
    associateRole: AssociateRole!
    sourceRef: KeyReference!
    source: BusinessUnit!
}

type InheritedAssociate{
    associateRoleAssignments: [InheritedAssociateRoleAssignment!]!
    customerRef: Reference
    customer: Customer
}

type BusinessUnit implements Versioned & ReferenceExpandable{
    key: String!
    name: String!
    contactEmail: String
    addresses: [Address!]!
    defaultShippingAddress: Address
    defaultBillingAddress: Address
    defaultShippingAddressId: String
    defaultBillingAddressId: String
    shippingAddresses: [Address!]!
    billingAddresses: [Address!]!
    shippingAddressIds: [String!]!
    billingAddressIds: [String!]!
    status: BusinessUnitStatus!
    storesRef: [KeyReference!]
    stores: [Store!]
    storeMode: String
    unitType: BusinessUnitType!
    associates: [Associate!]!
    associateMode: BusinessUnitAssociateMode!
    inheritedAssociates: [InheritedAssociate!]
    custom: CustomFieldsType
    parentUnitRef: KeyReference
    parentUnit: BusinessUnit
    ancestors: [BusinessUnit!]!
    inheritedStores: [InheritedStore!]
    topLevelUnitRef: KeyReference
    topLevelUnit: BusinessUnit!
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

"A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart."
type Cart implements Versioned & ReferenceExpandable{
    customerId: String
    customer: Customer
    customerEmail: String
    anonymousId: String
    lineItems(id: String): [LineItem!]!
    customLineItems: [CustomLineItem!]!
    totalPrice: Money!
    taxedPrice: TaxedPrice
    discountOnTotalPrice: DiscountOnTotalPrice
    shippingAddress: Address
    billingAddress: Address
    inventoryMode: InventoryMode!
    taxMode: TaxMode!
    taxRoundingMode: RoundingMode!
    taxCalculationMode: TaxCalculationMode!
    customerGroup: CustomerGroup
    customerGroupRef: Reference
    country: Country
    shippingKey: String
    shippingInfo: ShippingInfo
    discountCodes: [DiscountCodeInfo!]!
    directDiscounts: [DirectDiscount!]!
    refusedGifts: [CartDiscount!]!
    refusedGiftsRefs: [Reference!]!
    paymentInfo: PaymentInfo
    locale: Locale
    shippingRateInput: ShippingRateInput
    origin: CartOrigin!
    storeRef: KeyReference
    store: Store
    itemShippingAddresses: [Address!]!
    businessUnit: BusinessUnit
    businessUnitRef: KeyReference
    shipping: [Shipping!]!
    taxedShippingPrice: TaxedPrice
    shippingMode: ShippingMode!
    shippingCustomFields: CustomFieldsType
    cartState: CartState!
    key: String
    custom: CustomFieldsType
    deleteDaysAfterLastModification: Int
    totalLineItemQuantity: Long
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

`;

export default cart;
