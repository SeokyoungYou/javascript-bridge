const {
  createPlayerState,
  PLAYER_STATE,
} = require("../src/presenter/constantsPresenter");

describe("Player State 테스트", () => {
  test("Player State 생성 테스트", () => {
    const playerState = createPlayerState(true, true);
    expect(playerState).toBe(PLAYER_STATE.SUCCESS);
  });
});
