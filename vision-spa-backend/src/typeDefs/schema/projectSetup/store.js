const store = `

type InheritedStore{
    store: Store
    storeRef: KeyReference!
}

type StoreCountry{
    code: Country!
}

type ProductSelectionSetting{
    productSelectionRef: Reference!
    productSelection: ProductSelection
    active: Boolean!
}

type Store implements Versioned & ReferenceExpandable{
    id: String!
    version: Long!
    key: String!
    name(locale: Locale, acceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]
    languages: [Locale!]
    countries: [StoreCountry!]
    productSelections: [ProductSelectionSetting!]!
    distributionChannelsRef: [Reference!]!
    distributionChannels: [Channel!]!
    supplyChannelsRef: [Reference!]!
    supplyChannels: [Channel!]!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    custom: CustomFieldsType
    createdBy: Initiator
    lastModifiedBy: Initiator
}
`;

export default store;
