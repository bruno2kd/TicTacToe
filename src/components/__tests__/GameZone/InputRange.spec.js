import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import InputRange from "../../GameZone/InputRange.vue";

describe("InputRange", () => {
  it("render input correctly", () => {
    const rangeInput = 5;

    const wrapper = shallowMount(InputRange, {
      props: { rangeInput },
    });
    const value = wrapper.find('input').element.value
    expect(value).toContain(rangeInput)
  });
});
