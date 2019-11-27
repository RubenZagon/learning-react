import * as React from "react";
import { shallow, mount, render } from "enzyme";
import CounterButton from "../counterButton";

describe("Counter Button", () => {
  describe("render", () => {
    test("Debería renderizar un componente tipo boton", () => {
      const wrapper = shallow(<CounterButton />);
      expect(wrapper.find("button").text()).toBe("0");
    });
    test("Debería cambiar a 1 el texto cuando se le pulsa al botón", () => {
      const wrapper = shallow(<CounterButton />);
      wrapper.find("button").simulate("click");
      expect(wrapper.find("button").text()).toBe("1");
    });
  });
});
