import { describe, it, expect } from "vitest";

import { shallowMount, mount } from "@vue/test-utils";
import ButtonComponent from "../../UI/ButtonComponent.vue";

describe("ButtonComponent", () => {
  it("render stop watch correctly", () => {
    const parentClass = "parent-class";

    const wrapper = shallowMount(ButtonComponent, {
      props: { class: parentClass },
    });

    const btn = wrapper.findAll("button");
    const element = btn.at(0);

    expect(element.classes()).toContain(parentClass);
  });

  it("slot render text properly", () => {
    const text = "Main Button";
    const wrapper = mount(ButtonComponent, {
      slots: {
        default: text,
      },
    });

    expect(wrapper.find("button").text()).toContain(text);
  });

  it("click trigger onClick emit", async () => {
    const wrapper = mount(ButtonComponent);

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("onClick");
  });
});
