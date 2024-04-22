const customer = `

type CustomerGroup implements Versioned, ReferenceExpandable{
    id: String!
    version: Long!
    name: String!
    key: String
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    custom: CustomFieldsType
    createdBy: Initiator
    lastModifiedBy: Initiator
}

type CustomerGroupAssignment{
    customerGroupRef: Reference
    customerGroup: CustomerGroup
}

type Customer implements Versioned, ReferenceExpandable {
    customerNumber: String
    email: String!
    addresses: [Address!]!
    defaultShippingAddressId: String
    defaultBillingAddressId: String
    shippingAddressIds: [String!]!
    billingAddressIds: [String!]!
    isEmailVerified: Boolean!
    customerGroupRef: Reference
    externalId: String
    key: String
    authenticationMode: AuthenticationMode
    firstName: String
    lastName: String
    middleName: String
    title: String
    locale: Locale
    salutation: String
    dateOfBirth: Date
    companyName: String
    vatId: String
    password: String
    customerGroup: CustomerGroup
    defaultShippingAddress: Address
    defaultBillingAddress: Address
    shippingAddresses: [Address!]!
    billingAddresses: [Address!]!
    storesRef: [KeyReference!]!
    stores: [Store!]!
    customerGroupAssignments: [CustomerGroupAssignment!]
    custom: CustomFieldsType
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}`;

export default customer;
