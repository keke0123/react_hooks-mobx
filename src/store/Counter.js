import { observable } from "mobx";

const counter = observable({
  number: 1,
  increase() {
    console.log("this", this);
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export { counter };
