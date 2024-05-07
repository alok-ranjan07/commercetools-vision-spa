import { createCart } from "../helper/cart.js";
import { customerSignIn, customerSignUp } from "../helper/customer.js";

const mutation = {
  customerSignIn: customerSignIn,
  customerSignUp: customerSignUp,
  createCart: createCart,
};

export default mutation;
