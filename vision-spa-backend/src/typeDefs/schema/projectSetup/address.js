//need to declare the field country is error occurs
const address = `

input AddressDraft{
    id: String
    key: String
    externalId: String
    country: Country!
    title: String
    salutation: String
    firstName: String
    lastName: String
    streetName: String
    streetNumber: String
    additionalStreetInfo: String
    postalCode: String
    city: String
    region: String
    state: String
    company: String
    department: String
    building: String
    apartment: String
    pOBox: String
    phone: String
    mobile: String
    email: String
    fax: String
    additionalAddressInfo: String
}

type Address{
    id: String
    key: String
    externalId: String
    country: Country!
    title: String
    salutation: String
    firstName: String
    lastName: String
    streetName: String
    streetNumber: String
    additionalStreetInfo: String
    postalCode: String
    city: String
    region: String
    state: String
    company: String
    department: String
    building: String
    apartment: String
    pOBox: String
    phone: String
    mobile: String
    email: String
    fax: String
    additionalAddressInfo: String
    custom: CustomFieldsType @deprecated(reason:"not availabe in docs")
}
`;

export default address;
