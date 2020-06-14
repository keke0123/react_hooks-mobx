import axios from "axios";

const agent = axios.create({
  baseURL: "http://localhost:8000",
});

agent.interceptors.request.use((request) => {
  return request;
});

agent.interceptors.response.use((response) => {
  return response.data;
});

export { agent };
