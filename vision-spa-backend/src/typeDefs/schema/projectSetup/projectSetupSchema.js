import customType from "./customType.js";
import channel from "./channel.js";
import taxCategory from "./taxCategory.js";
import state from "./state.js";
import store from "./store.js";
import address from "./address.js";
import category from "./category.js";
import payment from "./payment.js";
import shipping from "./shipping.js";
import zone from "./zone.js";

const projectSetupSchema = `
${address}
${category}
${channel}
${customType}
${payment}
${shipping}
${state}
${store}
${taxCategory}
${zone}
`;

export default projectSetupSchema;
