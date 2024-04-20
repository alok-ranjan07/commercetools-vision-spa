import "dotenv/config";

export default {
  ct: {
    auth: {
      host: process.env.CTP_AUTH_URL,
      projectKey: process.env.CTP_PROJECT_KEY,
      credentials: {
        clientId: process.env.CTP_CLIENT_ID,
        clientSecret: process.env.CTP_CLIENT_SECRET,
      },
      scopes: process.env.CTP_SCOPES,
    },
    api: process.env.CTP_API_URL,
    graphql: `${process.env.CTP_API_URL}/${process.env.CTP_PROJECT_KEY}/graphql`,
  },
};
