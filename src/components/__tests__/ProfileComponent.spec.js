import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ProfileComponent from "../ProfileComponent.vue";

describe("ProfileComponent", () => {
  it("mounts correctly", () => {
    const wrapper = mount(ProfileComponent);

    expect(wrapper.text()).toContain("Bruno Kern");
  });

  it("has right classes", () => {
    const wrapper = mount(ProfileComponent);

    const divs = wrapper.findAll("div");
    const divMain = divs.at(0);
    const divMainInfo = divs.at(1);
    const divDescription = divs.at(2);

    expect(divMain.classes()).toContain("profile__main");
    expect(divMainInfo.classes()).toContain("profile__main--info");
    expect(divDescription.classes()).toContain("profile__description");
  });
});
