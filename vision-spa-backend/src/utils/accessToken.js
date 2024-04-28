import { encode } from "js-base64";
import fetch from "node-fetch";
import config from "../config/api.config.js";

const au = {
  authUrl: config.ct.auth.host,
  projectKey: config.ct.auth.projectKey,
  id: config.ct.auth.credentials.clientId,
  secret: config.ct.auth.credentials.clientSecret,
  scope: config.ct.auth.credentials.scopes,
  guestId: config.ct.auth.guestCredentials.clientId,
  guestSecret: config.ct.auth.guestCredentials.clientSecret,
  guestScope: config.ct.auth.guestCredentials.guestScope,
  storeurl: config.serviceURLs.store,
};

const createAuth = (au) => encode(`${au.id}:${au.secret}`);
const createGuestAuth = (au) => encode(`${au.guestId}:${au.guestSecret}`);

const auth = createAuth(au);
const guestAuth = createGuestAuth(au);
const guestScope = encodeURI(au.guestScope);

const anonymousToken = async () => {
  const response = await fetch(
    `${au.authUrl}/oauth/${au.projectKey}/anonymous/token`,
    {
      headers: {
        authorization: `Basic ${guestAuth}`,
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&scope=${guestScope}`,
      method: "POST",
    }
  );
  const { access_token, scope } = await response.json();
  return { access_token, scope };
};

const customerToken = async (email, password) => {
  const response = await fetch(
    `${au.authUrl}/oauth/${au.projectKey}/customers/token`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: `Basic ${auth}`,
      },
      body: new URLSearchParams({
        username: email,
        password: password,
        grant_type: "password",
        scope: au.scope,
      }),
      method: "POST",
    }
  );
  const { access_token, scope } = await response.json();
  if (access_token) {
    return { access_token, scope };
  } else {
    return anonymousToken();
  }
};

const customerTokenInStore = async (email, password, storeKey) => {
  const response = await fetch(
    `${au.authUrl}/oauth/${au.projectKey}/${au.storeurl}/key=${storeKey}/customers/token`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: `Basic ${auth}`,
      },
      body: new URLSearchParams({
        username: email,
        password: password,
        grant_type: "password",
        scope: au.scope,
      }),
      method: "POST",
    }
  );
  const { access_token, scope } = await response.json();
  if (access_token) {
    return { access_token, scope };
  } else {
    return anonymousToken();
  }
};

export const fetchWithPassword = async (url, options, email, password) => {
  const { access_token, scope } = await customerToken(email, password);
  const id = scope
    .split(" ")
    .find(
      (item) =>
        item.startsWith("anonymous_id:") || item.startsWith("customer_id:")
    )
    .split(":");
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      authorization: `Bearer ${access_token}`,
    },
  });
  return { body: await response.json(), token: access_token, id: id };
};

export const fetchWithPasswordInStore = async (
  url,
  options,
  email,
  password,
  storeKey
) => {
  const { access_token, scope } = await customerTokenInStore(
    email,
    password,
    storeKey
  );
  const id = scope
    .split(" ")
    .find(
      (item) =>
        item.startsWith("anonymous_id:") || item.startsWith("customer_id:")
    )
    .split(":");
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      authorization: `Bearer ${access_token}`,
    },
  });
  return { body: await response.json(), token: access_token, id: id };
};

export const anonymousFetch = async (url, options) => {
  const { access_token, scope } = await anonymousToken();
  const id = scope
    .split(" ")
    .find(
      (item) =>
        item.startsWith("anonymous_id:") || item.startsWith("customer_id:")
    )
    .split(":");
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      authorization: `Bearer ${access_token}`,
    },
  });
  return { body: await response.json(), token: access_token, id: id };
};

export const fetchWithToken = async (url, options, bearer_token) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      authorization: `Bearer ${bearer_token}`,
    },
  });
  return { body: await response.json(), token: bearer_token };
};
export default fetchWithToken;
