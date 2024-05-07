const mutation = `
type Mutation{
    customerSignIn(draft: CustomerSignInDraft!, storeKey: KeyReferenceInput): CustomerSignInResponse!
    customerSignUp(draft: CustomerDraft!, storeKey: KeyReferenceInput): CustomerSignUpResponse!
    createCart(draft: CartDraft!, storeKey: KeyReferenceInput): CreateCartResponse!
}
`;
export default mutation;
