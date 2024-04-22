const state = `

type State implements Versioned, ReferenceExpandable{
    id: String!
    version: Long!
    key: String
    type: StateType!
    roles: [StateRole!]!
    name(locale: LocaleacceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]
    description(locale: LocaleacceptLanguage: [Locale!]): String
    descriptionAllLocales: [LocalizedString!]
    builtIn: Boolean!
    transitionsRef: [Reference!]
    transitions: [State!]
    initial: Boolean!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

`;

export default state;
