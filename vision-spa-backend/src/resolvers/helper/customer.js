import fetchWithToken, {
  anonymousFetch,
  fetchWithPassword,
  fetchWithPasswordInStore,
} from "../../utils/accessToken.js";
import config from "../../config/api.config.js";

const au = {
  apiUrl: config.ct.api,
  projectKey: config.ct.auth.projectKey,
  loginUrl: config.serviceURLs.login,
  storeUrl: config.serviceURLs.store,
  customerUrl: config.serviceURLs.customer,
};

const ifChecker = (props) => {
  const { where, sort, expand, limit, offset, withTotal } = props;
  const queryParams = {};
  const queryObj = {
    where: where,
    sort: sort,
    expand: expand,
    limit: limit,
    offset: offset,
    withTotal: withTotal,
  };

  let queryArr = Object.entries(queryObj);
  queryArr.map((e) => {
    if (e[1]) {
      queryParams[`${e[0]}`] = e[1];
    }
  });

  return queryParams;
};

export const queryCustomers = async (_, args, context) => {
  const { storeKey, ...rest } = args;
  const containerName = context.containerName;

  const queryParams = ifChecker(rest);
  const queryString = new URLSearchParams(queryParams).toString();

  let response = { body: null, token: null };
  let url = `${au.apiUrl}/${au.projectKey}/${au.customerUrl}?${queryString}`;
  const options = {
    method: "GET",
  };

  if (storeKey) {
    url = `${au.apiUrl}/${au.projectKey}/${au.storeUrl}/key=${storeKey}/${au.customerUrl}?${queryString}`;
    response = await anonymousFetch(url, options);
  } else {
    response = await anonymousFetch(url, options);
  }

  if (response.body.statusCode == 400) {
    return { error: response.body.message };
  }
  return {
    results: response.body,
    accessToken: response.token,
    containerName: containerName,
  };
};

export const customerSignIn = async (_, args, context) => {
  const { draft, storeKey } = args;
  const containerName = context.containerName;

  const { email, password } = draft;
  let response = { body: null, token: null, id: null };
  let url = `${au.apiUrl}/${au.projectKey}/${au.loginUrl}`;
  const options = {
    method: "POST",
    body: JSON.stringify(draft),
  };

  if (storeKey) {
    url = `${au.apiUrl}/${au.projectKey}/${au.storeUrl}/key=${storeKey}/${au.loginUrl}`;
    response = await fetchWithPasswordInStore(
      url,
      options,
      email,
      password,
      storeKey
    );
  } else {
    response = await fetchWithPassword(url, options, email, password);
  }

  if (response.body.statusCode == 400) {
    return { error: response.body.message };
  }
  return {
    results: response.body,
    accessToken: response.token,
    id: { id: response.id[1], type: response.id[0] },
    containerName: containerName,
  };
};

export const customerSignUp = async (_, args, context) => {
  const { draft, storeKey } = args;
  const containerName = context.containerName;

  let response = { body: null, token: null, id: null };
  let url = `${au.apiUrl}/${au.projectKey}/${au.customerUrl}`;
  const options = {
    method: "POST",
    body: JSON.stringify(draft),
  };

  if (storeKey) {
    url = `${au.apiUrl}/${au.projectKey}/${au.storeUrl}/key=${storeKey}/${au.customerUrl}`;
    response = await anonymousFetch(url, options);
  } else {
    response = await anonymousFetch(url, options);
  }

  if (response.body.statusCode == 400) {
    return { error: response.body.message };
  }
  return {
    results: response.body,
    accessToken: response.token,
    id: { id: response.id[1], type: response.id[0] },
    containerName: containerName,
  };
};
