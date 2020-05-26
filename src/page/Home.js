import React from "react";
import { useObserver } from "mobx-react";
import useStore from "../store";

export default function Home() {
  const { counter } = useStore();
  return useObserver(() => {
    return (
      <div>
        <h1>{counter.number}</h1>
      </div>
    );
  });
}
