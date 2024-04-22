//need to declare the field country is error occurs
const address = `
type Address{
    id: String
    streetName: String
    streetNumber: String
    additionalStreetInfo: String
    postalCode: String
    city: String
    region: String
    state: String
    country: Country!
    company: String
    department: String
    building: String
    apartment: String
    pOBox: String
    additionalAddressInfo: String
    externalId: String
    key: String
    phone: String
    mobile: String
    email: String
    fax: String
    title: String
    salutation: String
    firstName: String
    lastName: String
    custom: CustomFieldsType
}
`;

export default address;
