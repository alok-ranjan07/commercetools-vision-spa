const productDiscount = `

type ProductDiscountValue{
    type: String!
}

type ProductDiscount implements Versioned, ReferenceExpandable{
    predicate: String!
    validFrom: DateTime
    validUntil: DateTime
    isActive: Boolean!
    isValid: Boolean!
    sortOrder: String!
    key: String
    name(locale: LocaleacceptLanguage: [Locale!]): String
    description(locale: LocaleacceptLanguage: [Locale!]): String
    referenceRefs: [Reference!]!
    nameAllLocales: [LocalizedString!]!
    descriptionAllLocales: [LocalizedString!]
    value: ProductDiscountValue!
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

`;

export default productDiscount;
