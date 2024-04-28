const queryInterface = `

interface Versioned{
    id: String!
    version: Long!
    createdAt: DateTime!
    lastModifiedAt: DateTime!
    createdBy: Initiator
    lastModifiedBy: Initiator
}

interface ReferenceExpandable{
    id: String!
}

interface ReviewTarget{
    id: String!
}

`;

export default queryInterface;
