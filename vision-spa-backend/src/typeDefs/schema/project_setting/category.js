const category = `

type Category implements Versioned & ReferenceExpandable{
    id: String!
    key: String
    version: Long!
    name(locale: Locale, acceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    description(locale: Locale, acceptLanguage: [Locale!]): String
    descriptionAllLocales: [LocalizedString!]
    slug(locale: Locale, acceptLanguage: [Locale!]): String
    slugAllLocales: [LocalizedString!]!
    ancestorsRef: [Reference!]!
    ancestors: [Category!]!
    parentRef: Reference
    parent: Category
    orderHint: String!
    externalId: String
    metaTitle(locale: Locale, acceptLanguage: [Locale!]): String
    metaTitleAllLocales: [LocalizedString!]
    metaKeywords(locale: Locale, acceptLanguage: [Locale!]): String
    metaKeywordsAllLocales: [LocalizedString!]
    metaDescription(locale: Locale, acceptLanguage: [Locale!]): String
    metaDescriptionAllLocales: [LocalizedString!]
    stagedProductCount: Int!
    childCount: Int!
    children: [Category!]
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    assets: [Asset!]!
    custom: CustomFieldsType
    createdBy: Initiator
    lastModifiedBy: Initiator
}
`;
export default category;
