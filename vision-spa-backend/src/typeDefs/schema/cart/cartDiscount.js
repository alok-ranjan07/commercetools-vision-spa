const cartDiscount = `

type DiscountCodeInfo{
    discountCodeRef: Reference!
    state: DiscountCodeState
    discountCode: DiscountCode
}

type DiscountCode implements Versioned & ReferenceExpandable{
    code: String!
    key: String
    isActive: Boolean!
    maxApplications: Long
    maxApplicationsPerCustomer: Long
    cartPredicate: String
    applicationVersion: Long
    validFrom: DateTime
    validUntil: DateTime
    groups: [String!]!
    name(locale: Locale, acceptLanguage: [Locale!]): String
    description(locale: Locale, acceptLanguage: [Locale!]): String
    cartDiscounts: [CartDiscount!]!
    referenceRefs: [Reference!]!
    nameAllLocales: [LocalizedString!]
    descriptionAllLocales: [LocalizedString!]
    custom: CustomFieldsType
    applicationCount: Long!
    cartDiscountRefs: [Reference!]!
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
    }

type CartDiscountValue{
    type: String!
}

type CartDiscountTarget{
    type: String!
}

type CartDiscount implements Versioned & ReferenceExpandable{
    cartPredicate: String!
    validFrom: DateTime
    validUntil: DateTime
    stackingMode: StackingMode!
    isActive: Boolean!
    requiresDiscountCode: Boolean!
    sortOrder: String!
    key: String
    name(locale: Locale, acceptLanguage: [Locale!]): String
    description(locale: Locale, acceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    descriptionAllLocales: [LocalizedString!]
    referenceRefs: [Reference!]!
    custom: CustomFieldsType
    storesRef: [KeyReference!]!
    stores: [Store!]!
    value: CartDiscountValue!
    target: CartDiscountTarget
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

`;

export default cartDiscount;
