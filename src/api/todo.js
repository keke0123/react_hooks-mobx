import { agent } from "./request";

const createTodoApi = async (data) => {
  console.log("createTodoApi");
  // console.log("data", data);
  return await agent({
    method: "POST",
    url: "/todo/insert",
    data: { title: data },
  });
};

const getTodoApi = async () => {
  console.log("getTodoApi");
  return await agent({
    method: "GET",
    url: "/todo/select",
  });
};

export { createTodoApi, getTodoApi };
