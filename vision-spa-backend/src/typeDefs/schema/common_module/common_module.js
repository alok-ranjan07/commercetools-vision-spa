import enums from "./enum.js";
import queryInterface from "./interface.js";
import types from "./types.js";
import scalar from "./scalar.js";

const commonModule = `
${scalar}
${enums}
${queryInterface}
${types}
`;

export default commonModule;
