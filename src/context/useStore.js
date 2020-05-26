import React from "react";
import { storeContext } from "./index";

function useStore() {
  const store = React.useContext(storeContext);
  return store;
}
export default useStore;
