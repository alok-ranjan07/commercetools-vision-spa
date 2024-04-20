const config = {
  ct: {
    auth: {
      host: process.env.REACT_APP_CTP_AUTH_URL,
      projectKey: process.env.REACT_APP_CTP_PROJECT_KEY,
      credentials: {
        clientId: process.env.REACT_APP_CTP_CLIENT_ID,
        clientSecret: process.env.REACT_APP_CTP_CLIENT_SECRET,
      },
      scopes: process.env.REACT_APP_CTP_SCOPES,
    },
    api: process.env.REACT_APP_CTP_API_URL,
    graphql: `${process.env.REACT_APP_CTP_API_URL}/${process.env.REACT_APP_CTP_PROJECT_KEY}/graphql`,
  },
};

export default config;
