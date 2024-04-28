const payment = `

type PaymentInfo{
    payments: [Payment!]!
    paymentRefs: [Reference!]!
}

type PaymentMethodInfo{
    paymentInterface: String
    method: String
    name(locale: Locale, acceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]
}

type PaymentStatus{
    interfaceCode: String
    interfaceText: String
    stateRef: Reference
    state: State
}

type Transaction{
    id: String!
    timestamp: DateTime
    type: TransactionType
    amount: Money!
    interactionId: String
    state: TransactionState!
    custom: CustomFieldsType
}

type InterfaceInteractionsRaw{
    typeRef: Reference!
    type: TypeDefinition
    fields(includeNames: [String!], excludeNames: [String!]): [RawCustomField!]!
}

type InterfaceInteractionsRawResult{
    limit: Int
    offset: Int
    total: Int!
    results: [InterfaceInteractionsRaw!]!
}

type Payment implements Versioned{
    key: String
    customerRef: Reference
    customer: Customer
    anonymousId: String
    interfaceId: String
    amountPlanned: Money!
    paymentMethodInfo: PaymentMethodInfo!
    paymentStatus: PaymentStatus!
    transactions: [Transaction!]!
    interfaceInteractionsRaw(limit: Int, offset: Int): InterfaceInteractionsRawResult!
    custom: CustomFieldsType
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

`;

export default payment;
