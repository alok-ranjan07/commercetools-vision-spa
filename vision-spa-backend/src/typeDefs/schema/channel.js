const channel = `

type Channel implements Versioned, ReviewTarget, ReferenceExpandable{
    id: String!
    version: Long!
    key: String!
    roles: [ChannelRole!]!
    name(locale: LocaleacceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]
    description(locale: LocaleacceptLanguage: [Locale!]): String
    descriptionAllLocales: [LocalizedString!]
    address: Address
    geoLocation: Geometry
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    reviewRatingStatistics: ReviewRatingStatistics
    custom: CustomFieldsType
    createdBy: Initiator
    lastModifiedBy: Initiator
}
`;
export default channel;
