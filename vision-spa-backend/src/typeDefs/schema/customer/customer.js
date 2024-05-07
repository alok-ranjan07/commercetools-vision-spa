const customer = `

type CustomerSignInResult{
    customer: Customer!
    cart: Cart
}

input CustomerSignInDraft{
    email: String!
    password: String!
    anonymousCartId: String @deprecated(reason:"not available in the docs anymore")
    anonymousCart: ResourceIdentifierInput
    anonymousCartSignInMode: AnonymousCartSignInMode
    anonymousId: String
    updateProductData: Boolean
}

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

type CustomerGroupReference{
    id: String!
    typeId: String!
}

input CustomerGroupReferenceInput{
    id: String
    key: String
    typeId: String
}

input CustomerDraft{
    key: String
    customerNumber: String
    externalId: String
    email: String!
    password: String
    firstName: String 
    lastName: String 
    middleName: String 
    title: String
    anonymousCart: ResourceIdentifierInput
    anonymousId: String
    dateOfBirth: Date
    companyName: String
    vatId: String 
    addresses: [AddressDraft!]
    defaultShippingAddress: Int
    shippingAddresses: [Int!]
    defaultBillingAddress: Int
    billingAddresses: [Int!]
    isEmailVerified: Boolean
    customerGroup: CustomerGroupReferenceInput
    locale: Locale
    salutation: String
    stores: [ResourceIdentifierInput]
    authenticationMode: AuthenticationMode
    custom: CustomFieldsDraft
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
    customerGroup: CustomerGroupReference
    locale: Locale
    salutation: String
    stores: [KeyReference!]!
    authenticationMode: AuthenticationMode
    custom: CustomFieldsType
    createdAt: DateTime!
    createdBy: Initiator
    lastModifiedAt: DateTime!
    lastModifiedBy: Initiator
    defaultBillingAddress: Address @deprecated(reason:"not available in docs")
    customerGroupRef: Reference @deprecated(reason:"not available in docs")
    defaultShippingAddress: Address @deprecated(reason:"not available in docs")
    shippingAddresses: [Address!] @deprecated(reason:"not available in docs")
    billingAddresses: [Address!] @deprecated(reason:"not available in docs")
    storesRef: [KeyReference!] @deprecated(reason:"not available in docs")
    customerGroupAssignments: [CustomerGroupAssignment!]
    
}`;

export default customer;
