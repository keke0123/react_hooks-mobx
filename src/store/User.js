import { observable } from "mobx";
import { counter } from "./Counter";

const user = observable({
  name: "",
  setName(name) {
    this.name = name;
  },
  sum: 0,
  setSum() {
    this.sum = counter.number;
  },
});

export { user };
