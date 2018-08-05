// src/tests/components/Hello.test.tsx
import * as React from "react";
import * as enzyme from "enzyme";
import Hello from "../../components/Hello";

it("renders the correct text when no enthusiasm level is given", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("renders the correct text with an explicit enthusiasm of 1", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("renders the correct text with an explicit enthusiasm of 5", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!!!!!");
});

it("throws when the enthusasim level is 0", () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
  }).toThrow();
});

it("throws when the enthusiasm level is negative", () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});