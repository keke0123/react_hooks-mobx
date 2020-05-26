import React, { createContext } from "react";
import { counter } from "../store/Counter";
import { user } from "../store/User";
import { useLocalStore } from "mobx-react";

export const storeContext = createContext({});

export const StoreProvider = ({ children }) => {
  const value = useLocalStore(() => ({
    counter,
    user,
  }));
  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
};

// export default StoreProvider;
