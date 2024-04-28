const channel = `

type Channel implements Versioned & ReviewTarget & ReferenceExpandable{
    id: String!
    version: Long!
    key: String!
    roles: [ChannelRole!]!
    name(locale: Locale, acceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]
    description(locale: Locale, acceptLanguage: [Locale!]): String
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
