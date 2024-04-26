import commonModule from "./common_module/common_module.js";
import projectSetting from "./project_setting/project_setup.js";
import productIndex from "./product_module/productIndex.js";
import customer from "./customer_module/customer.js";

const schema = `
${commonModule}
${projectSetting}
${productIndex}
${customer}

type LoginResponse {
id: ResponseTypeId
customer: Customer
accessToken: String
error: String
}
`;
export default schema;
