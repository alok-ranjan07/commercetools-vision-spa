import { fetchWithPassword } from "../utils/accessToken.js";
import config from "../utils/api.config.js";

const au = {
  apiUrl: config.ct.api,
  projectKey: config.ct.auth.projectKey,
  loginurl: config.serviceURLs.customerLogin,
};

const resolvers = {
  Query: {
    customerLogin: async (_, { email, password }, context) => {
      const url = `${au.apiUrl}/${au.projectKey}/${au.loginurl}`;
      const options = {
        method: "POST",
        body: JSON.stringify({ email, password }),
      };

      const response = await fetchWithPassword(url, options, email, password);
      if (response.response.statusCode == 400) {
        return { error: response.response.message };
      }
      return {
        customer: response.response.customer,
        accessToken: response.token,
        id: { id: response.id[1], type: response.id[0] },
      };
    },
  },
};
export default resolvers;
