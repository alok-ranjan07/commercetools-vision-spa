const customer = `

type CustomerGroup implements Versioned & ReferenceExpandable{
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

"A customer is a person purchasing products. Carts, Orders and Reviews can be associated to a customer."
type Customer implements Versioned & ReferenceExpandable {
    id: String!
    version: Long!
    key: String
    customerNumber: String
    externalId: String
    email: String!
    password: String
    firstName: String
    lastName: String
    middleName: String
    title: String
    dateOfBirth: Date
    companyName: String
    vatId: String
    addresses: [Address!]!
    defaultShippingAddressId: String
    shippingAddressIds: [String!]!
    defaultBillingAddressId: String
    billingAddressIds: [String!]!
    isEmailVerified: Boolean!
    customerGroup: CustomerGroup
    locale: Locale
    salutation: String
    stores: [Store!]!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
    defaultBillingAddress: Address
    customerGroupRef: Reference
    authenticationMode: AuthenticationMode
    defaultShippingAddress: Address
    shippingAddresses: [Address!]
    billingAddresses: [Address!]
    storesRef: [KeyReference!]
    customerGroupAssignments: [CustomerGroupAssignment!]
    custom: CustomFieldsType
    
}`;

export default customer;
