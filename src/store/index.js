import { counter } from "./Counter";
import { user } from "./User";

const useStore = () => {
  return { counter, user };
};

export default useStore;
