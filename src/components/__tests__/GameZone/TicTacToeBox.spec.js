import { describe, it, expect } from "vitest";

import { shallowMount, mount } from "@vue/test-utils";
import TicTacToeBox from "../../GameZone/TicTacToeBox.vue";

describe("TicTacToeBox", () => {
  it("get player image when needed", () => {
    const index = 0;
    const cells = 3
    const player = 1


    const wrapper = shallowMount(TicTacToeBox, {
      props: { index, cells, player },
    });

    const img = wrapper.find('img').attributes("src")

    expect(img).toContain(`/src/assets/images/${player}.svg`)
    expect(img).not.toContain(`/src/assets/images/${player}_winner.svg`)
  });

  it("no input no image", () => {
    const index = 0;
    const cells = 3
    const player = null

    const wrapper = shallowMount(TicTacToeBox, {
      props: { index, cells, player },
    });

    const img = wrapper.find('img')

    expect(img).toBeNull
  });

  it("highlight winner", () => {
    const index = 0;
    const cells = 3
    const winnerLine = [[0, 0], [0, 1], [0, 2]]
    const player = 1


    const wrapper = shallowMount(TicTacToeBox, {
      props: { index, cells, winnerLine, player },
    });

    const img = wrapper.find('img').attributes("src")

    expect(img).not.toContain(`/src/assets/images/${player}.svg`)
    expect(img).toContain(`/src/assets/images/${player}_winner.svg`)
  });
});
