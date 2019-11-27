import * as React from "react";
import { shallow, mount, render } from "enzyme";
import Hello from "../Hello";

describe("Hello", () => {
  describe("render", () => {
    test("Debe contene un h1 con el texto Hola Ruben", () => {
      const wrapper = shallow(<Hello name="Ruben" />);
      expect(wrapper.find("h1").text()).toBe("Hello Ruben");
    });
  });
});
