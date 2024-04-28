import enums from "./enum.js";
import queryInterface from "./interface.js";
import types from "./types.js";
import scalar from "./scalar.js";

const commonModuleSchema = `
${scalar}
${enums}
${queryInterface}
${types}
`;

export default commonModuleSchema;
