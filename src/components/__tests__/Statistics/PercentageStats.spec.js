import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import PercentageStats from "../../Statistics/PercentageStats.vue";

describe("PercentageStats", () => {
  it("mounts properly", () => {
    const percentage = 50;
    const subtitle = "V";

    const wrapper = shallowMount(PercentageStats, {
      props: { percentage, subtitle },
    });

    const div = wrapper.find(".player-circle");
    const p = wrapper.find("p");

    expect(div.text()).toContain(`${percentage}%`);
    expect(p.text()).toContain(subtitle);
  });
});
