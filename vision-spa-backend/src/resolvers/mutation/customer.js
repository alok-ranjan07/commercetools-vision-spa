import {
  fetchWithPassword,
  fetchWithPasswordInStore,
} from "../../utils/accessToken.js";
import config from "../../config/api.config.js";

const au = {
  apiUrl: config.ct.api,
  projectKey: config.ct.auth.projectKey,
  loginUrl: config.serviceURLs.login,
  storeurl: config.serviceURLs.store,
};

export const customerSignIn = async (_, args, context) => {
  const { draft, storeKey } = args;
  const { email, password } = draft;
  let url = `${au.apiUrl}/${au.projectKey}/${au.loginUrl}`;
  const options = {
    method: "POST",
    body: JSON.stringify(draft),
  };

  if (storeKey) {
    url = `${au.apiUrl}/${au.projectKey}/${au.storeurl}/key=${storeKey}/${au.loginUrl}`;
    const response = await fetchWithPasswordInStore(
      url,
      options,
      email,
      password,
      storeKey
    );

    if (response.body.statusCode == 400) {
      return { error: response.body.message };
    }
    return {
      results: response.body,
      accessToken: response.token,
      id: { id: response.id[1], type: response.id[0] },
    };
  }

  const response = await fetchWithPassword(url, options, email, password);

  if (response.body.statusCode == 400) {
    return { error: response.body.message };
  }
  return {
    results: response.body,
    accessToken: response.token,
    id: { id: response.id[1], type: response.id[0] },
  };
};
