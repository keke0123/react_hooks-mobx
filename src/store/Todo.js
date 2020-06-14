import { observable } from "mobx";

const InitialState = {
  todoList: [{ id: 0, title: "test" }],
};

const todo = observable({
  todoList: InitialState.todoList,
  async addTodo(todo) {
    this.todoList.push(todo);
  },
});

export { todo };
