import { struct } from "superstruct";
// import { validate } from "jest-validate";

describe("test", () => {
  test("test1", async () => {
    console.log("struct", struct);
    // console.log("validate", validate);
    // const result = validate(sample, validateOptions);
    // console.log("result", result);
  });
});

let validateOptions = {
  "title?": "string",
};
let sample = {
  title1: 1,
};
