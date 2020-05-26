import React from "react";
import { useObserver } from "mobx-react";
import useStore from "../store";

export default function About() {
  const { counter } = useStore();

  const increase = () => {
    console.log("counter", counter);
    counter.increase();
  };

  const decrease = () => {
    counter.decrease();
  };

  return useObserver(() => {
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    );
  });
}
