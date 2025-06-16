import { Player } from "./player";

describe("Player", () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  it("class exists", () => {
    expect(player).toBeDefined();
  });
});
