import { observable } from "mobx";

const user = observable({
  name: "",
  setName(name) {
    this.name = name;
  },
});

export { user };
