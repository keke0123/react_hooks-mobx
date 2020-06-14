import { observable } from "mobx";
//
import { todoApi } from "../api";

const InitialState = {
  // todoList: [{ id: 0, title: "test" }],
  todoList: [],
};

const todo = observable({
  todoList: InitialState.todoList,
  async addTodo(todo) {
    this.todoList.push(todo);
  },
  async getTodo() {
    console.log("getTodo");
    const result = await todoApi.getTodoApi();
    console.log("reuslt", result);
    this.todoList = result;
  },
});

export { todo };
