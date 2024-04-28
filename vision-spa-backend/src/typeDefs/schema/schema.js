import commonModuleSchema from "./commonModule/commonModuleSchema.js";
import productSchema from "./product/productSchema.js";
import projectSetupSchema from "./projectSetup/projectSetupSchema.js";
import customer from "./customer/customer.js";
import cartSchema from "./cart/cartSchema.js";
import response from "./response.js";

const schema = `
${commonModuleSchema}
${projectSetupSchema}
${productSchema}
${customer}
${cartSchema}
${response}
`;
export default schema;
