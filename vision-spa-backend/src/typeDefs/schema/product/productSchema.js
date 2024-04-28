import product from "./product.js";
import productDiscount from "./productDiscount.js";
import productSelection from "./productSelection.js";
import productVariant from "./productVariant.js";

const productSchema = `
${productDiscount}
${productVariant}
${product}
${productSelection}
`;

export default productSchema;
