import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import StopWatch from "../../UI/StopWatch.vue";

describe("StopWatch", () => {
  it("render stop watch correctly", () => {
    const time = "00:00:05";

    const wrapper = shallowMount(StopWatch, {
      props: { time },
    });
    
    expect(wrapper.text()).toContain(time)
  });
});
