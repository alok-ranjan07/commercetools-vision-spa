const response = `

type CustomerSignInResponse{
    id: ResponseTypeId
    accessToken: String
    error: String
    results: CustomerSignInResult
}

type CustomerSignUpResponse{
    id: ResponseTypeId
    accessToken: String
    error: String
    results: CustomerSignInResult
}

type CreateCartResponse{
    accessToken: String
    error: String
    results: Cart
}

`;

export default response;
