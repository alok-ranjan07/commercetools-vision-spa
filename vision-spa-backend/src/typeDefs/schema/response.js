const response = `

type CustomerSignInResponse{
    containerName: String
    id: ResponseTypeId
    accessToken: String
    error: String
    results: CustomerSignInResult
}

type CustomerSignUpResponse{
    containerName: String
    id: ResponseTypeId
    accessToken: String
    error: String
    results: CustomerSignInResult
}

type CreateCartResponse{
    containerName: String
    accessToken: String
    error: String
    results: Cart
}

type CustomerQueryResponse{
    containerName: String
    accessToken: String
    error: String
    results: CustomerQueryResult
}

`;

export default response;
