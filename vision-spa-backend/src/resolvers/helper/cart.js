import { fetchWithToken } from "../../utils/accessToken.js";
import config from "../../config/api.config.js";
import cart from "../../typeDefs/schema/cart/cart.js";

const au = {
  apiUrl: config.ct.api,
  projectKey: config.ct.auth.projectKey,
  loginUrl: config.serviceURLs.login,
  storeUrl: config.serviceURLs.store,
  cartUrl: config.serviceURLs.cart,
};

export const createCart = async (_, args, context) => {
  const { draft, storeKey } = args;
  const containerName = context.containerName;
  const accessToken = context.token;
  let response = { body: null, token: null };
  let url = `${au.apiUrl}/${au.projectKey}/${au.cartUrl}`;
  const options = {
    method: "POST",
    body: JSON.stringify(draft),
  };

  if (storeKey) {
    url = `${au.apiUrl}/${au.projectKey}/${au.storeUrl}/key=${storeKey}/${au.cartUrl}`;
    response = await fetchWithToken(url, options, accessToken);
  } else {
    response = await fetchWithToken(url, options, accessToken);
  }

  if (response.body.statusCode == 400) {
    return { error: response.body.message, containerName: containerName };
  }
  return {
    results: response.body,
    accessToken: response.token,
    containerName: containerName,
  };
};
