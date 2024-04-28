import { customerSignIn } from "./customer.js";

const mutation = {
  customerSignIn: (_, args, context) => {
    return customerSignIn(_, args, context);
  },
};

export default mutation;
