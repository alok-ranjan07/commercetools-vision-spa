const category = `

type Category implements Versioned, ReferenceExpandable{
    id: String!
    key: String
    version: Long!
    name(locale: LocaleacceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    description(locale: LocaleacceptLanguage: [Locale!]): String
    descriptionAllLocales: [LocalizedString!]
    slug(locale: LocaleacceptLanguage: [Locale!]): String
    slugAllLocales: [LocalizedString!]!
    ancestorsRef: [Reference!]!
    ancestors: [Category!]!
    parentRef: Reference
    parent: Category
    orderHint: String!
    externalId: String
    metaTitle(locale: LocaleacceptLanguage: [Locale!]): String
    metaTitleAllLocales: [LocalizedString!]
    metaKeywords(locale: LocaleacceptLanguage: [Locale!]): String
    metaKeywordsAllLocales: [LocalizedString!]
    metaDescription(locale: LocaleacceptLanguage: [Locale!]): String
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
