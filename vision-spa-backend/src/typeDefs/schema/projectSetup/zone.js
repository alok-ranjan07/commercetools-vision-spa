const zone = `

type ZoneRate{
    shippingRates: [ShippingRate!]!
    zoneRef: Reference
    zone: Zone
}

type Zone implements Versioned & ReferenceExpandable{
    name: String!
    key: String
    description: String
    locations: [Location!]!
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

type Location{
    country: Country!
    state: String
}

`;

export default zone;
