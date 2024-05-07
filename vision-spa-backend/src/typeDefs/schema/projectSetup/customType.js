const customType = `
type FieldDefinition{
    name: String!
    required: Boolean!
    inputHint: TextInputHint!
    label(locale: Locale, acceptLanguage: [Locale!]): String
    labelAllLocales: [LocalizedString!]!
    type: FieldType!
}

type TypeDefinition implements Versioned & ReferenceExpandable{
    key: String!
    name(locale: Locale, acceptLanguage: [Locale!]): String
    description(locale: Locale, acceptLanguage: [Locale!]): String
    nameAllLocales: [LocalizedString!]!
    descriptionAllLocales: [LocalizedString!]
    resourceTypeIds: [String!]!
    fieldDefinitions(includeNames: [String!], excludeNames: [String!]): [FieldDefinition!]!
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

type RawCustomField{
    name: String!
    value: Json!
    referencedResource: ReferenceExpandable
    referencedResourceSet: [ReferenceExpandable!]!
}

type CustomFieldsType{
    typeRef: Reference!
    type: TypeDefinition
    customFieldsRaw(includeNames: [String!], excludeNames: [String!]): [RawCustomField!]
}

input CustomFieldInput{
    name: String!
    value: String!
}

input CustomFieldsDraft{
    type: ResourceIdentifierInput
    fields: [CustomFieldInput!]
}

`;

export default customType;
