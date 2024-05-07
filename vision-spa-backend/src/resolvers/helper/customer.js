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
  const { storeKey, ...props } = args;
  const accessToken = context.token;

  const queryParams = ifChecker(props);
  const queryString = new URLSearchParams(queryParams).toString();

  let url = `${au.apiUrl}/${au.projectKey}/${au.customerUrl}?${queryString}`;
  const options = {
    method: "GET",
  };

  if (storeKey) {
    url = `${au.apiUrl}/${au.projectKey}/${au.storeUrl}/key=${storeKey}/${au.customerUrl}?${queryString}`;
    const response = await fetchWithToken(url, options, accessToken);

    if (response.body.statusCode == 400) {
      return { error: response.body.message };
    }
    return {
      results: response.body,
      accessToken: response.token,
    };
  }

  const response = await fetchWithToken(url, options, accessToken);
  if (response.body.statusCode == 400) {
    return { error: response.body.message };
  }
  return {
    results: response.body,
    accessToken: response.token,
  };
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
    url = `${au.apiUrl}/${au.projectKey}/${au.storeUrl}/key=${storeKey}/${au.loginUrl}`;
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

export const customerSignUp = async (_, args, context) => {
  const { draft, storeKey } = args;
  let url = `${au.apiUrl}/${au.projectKey}/${au.customerUrl}`;
  const options = {
    method: "POST",
    body: JSON.stringify(draft),
  };

  if (storeKey) {
    url = `${au.apiUrl}/${au.projectKey}/${au.storeUrl}/key=${storeKey}/${au.customerUrl}`;
    const response = await anonymousFetch(url, options);

    if (response.body.statusCode == 400) {
      return { error: response.body.message };
    }
    return {
      results: response.body,
      accessToken: response.token,
      id: { id: response.id[1], type: response.id[0] },
    };
  }

  const response = await anonymousFetch(url, options);

  if (response.body.statusCode == 400) {
    return { error: response.body.message };
  }
  return {
    results: response.body,
    accessToken: response.token,
    id: { id: response.id[1], type: response.id[0] },
  };
};
