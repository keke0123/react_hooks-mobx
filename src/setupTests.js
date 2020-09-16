// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

import { struct } from "superstruct";

const st = jest.mock("superstruct");

beforeAll(() => {
  // console.log("struct", struct);
  // console.log("st", st);
  // const temp = st({
  //   test1: "string",
  // });
  // console.log("temp", temp);
});
