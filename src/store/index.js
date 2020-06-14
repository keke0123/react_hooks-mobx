import { counter } from "./Counter";
import { user } from "./User";
import { todo } from "./Todo";

const useStore = () => {
  return { counter, user, todo };
};

export default useStore;
