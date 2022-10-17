import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import PlayerComponent from "../../GameZone/PlayerComponent.vue";

describe("PlayerComponent", () => {
  it("mounts properly", () => {
    const player = 2;
    const matchWinsCount = 1;

    const wrapper = shallowMount(PlayerComponent, {
      props: { player, matchWinsCount },
    });

    const div = wrapper.find(".player");
    const title = wrapper.find(".player--title");
    const count = wrapper.find(".player--count");

    expect(title.text()).toContain(`Player ${player}`);
    expect(count.text()).toContain(matchWinsCount);
    expect(div.classes()).not.toContain("active");
  });

  it("get players correct turn", () => {
    const currentTurn = true;
    const player = 2;
    const wrapper = shallowMount(PlayerComponent, {
      props: { player, currentTurn },
    });

    const div = wrapper.find(".player");

    expect(div.classes()).toContain("active");
  });
});
