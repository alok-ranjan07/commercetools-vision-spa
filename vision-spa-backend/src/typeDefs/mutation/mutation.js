const mutation = `
type Mutation{
    customerSignIn(draft: CustomerSignInDraft!, storeKey: KeyReferenceInput): CustomerSignInResponse!

}
`;
export default mutation;
