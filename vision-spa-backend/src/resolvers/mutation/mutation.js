import { createCart } from "./cart.js";
import { customerSignIn, customerSignUp } from "./customer.js";

const mutation = {
  customerSignIn: (_, args, context) => {
    return customerSignIn(_, args, context);
  },
  customerSignUp: (_, args, context) => {
    return customerSignUp(_, args, context);
  },
  createCart: (_, args, context) => {
    return createCart(_, args, context);
  },
};

export default mutation;
