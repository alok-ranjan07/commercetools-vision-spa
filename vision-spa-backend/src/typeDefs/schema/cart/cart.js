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
    key: String
    productId: String!
    id: String!
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

input ExternalLineItemTotalPrice{
    price: MoneyInput
    totalPrice: MoneyInput
}

input MethodExternalTaxRateDraft{
    shippingMethodKey: String
    taxRate: ExternalTaxRateDraft
}

input ItemShippingTargetInput{
    addressKey: String!
    quantity: Int!
    shippingMethodKey: String
}

input ItemShippingDetailsDraft{
    targets: [ItemShippingTargetInput!]!
}

input CustomFieldsDraft{
    type: ResourceIdentifierInput!
    fields: [CustomFieldInput!]
}

input LineItemDraft{
    key: String
    productId: String
    variantId: Int
    sku: String
    quantity: Int
    addedAt: DateTime
    distributionChannel: ResourceIdentifierInput
    supplyChannel: ResourceIdentifierInput
    externalPrice: MoneyInput
    externalTotalPrice: ExternalLineItemTotalPrice
    externalTaxRate: ExternalTaxRateDraft
    perMethodExternalTaxRate: [MethodExternalTaxRateDraft]
    inventoryMode: InventoryMode
    shippingDetails: ItemShippingDetailsDraft
    custom: CustomFieldsDraft
}

input CustomLineItemDraft{
    key: String
    name: String!
    quantity: Int
    money: MoneyInput!
    slug: String!
    taxCategory: ResourceIdentifierInput
    externalTaxRate: ExternalTaxRateDraft
    shippingDetails: ItemShippingDetailsDraft
    priceMode: CustomLineItemPriceMode
    custom: CustomFieldsDraft
}

input CartDraft{
    key: String
    currency: Currency!
    customerId: String
    customerEmail: String
    customerGroup: CustomerGroupReferenceInput
    anonymousId: String
    businessUnit: ResourceIdentifierInput
    store: ResourceIdentifierInput
    lineItems: [LineItemDraft!]
    customLineItems: [CustomLineItemDraft!]
    taxMode: TaxMode
    externalTaxRateForShippingMethod: ExternalTaxRateDraft
    taxRoundingMode: RoundingMode
    taxCalculationMode: TaxCalculationMode
    inventoryMode: InventoryMode
    billingAddress: AddressDraft
    shippingAddress: AddressDraft
    shippingMethod: ResourceIdentifierInput
    shippingRateInput: ShippingRateInputDraft
    shippingMode: ShippingMode
    customShipping: [CustomShippingDraft!]
    shipping: [ShippingDraft!]
    itemShippingAddresses: [AddressDraft!]
    discountCodes: [String!]
    country: Country
    locale: Locale
    origin: CartOrigin
    deleteDaysAfterLastModification: Int
    custom: CustomFieldsDraft
}

`;

export default cart;
