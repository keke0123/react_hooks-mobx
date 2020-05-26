import React from "react";
import { useObserver } from "mobx-react";
// import useStore from "../store";
import useStore from "../context/useStore";

export default function About() {
  const { counter, user } = useStore();

  const increase = () => {
    console.log("counter", counter);
    counter.increase();
  };

  const decrease = () => {
    counter.decrease();
  };

  const sum = () => {
    user.setSum();
  };

  return useObserver(() => {
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <div>sum</div>
        <h1>{user.sum}</h1>
        <button onClick={sum}>setSum</button>
      </div>
    );
  });
}
