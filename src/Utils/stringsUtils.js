const INPUT_VAL = {
  SIZE_ERROR: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  MOVING_ERROR: "[ERROR] 이동은 U 혹은 D를 입력해야 합니다.",
  RETRY_ERROR: "[ERROR] R 혹은 Q를 입력햐여 재시작/종료 여부를 결정해 주세요.",
};

const FALLBACK_FN = {
  size(bridgeGamePresenter) {
    bridgeGamePresenter.getBridgeSize();
  },
  moving(bridgeGamePresenter) {
    bridgeGamePresenter.getPlayerMove();
  },
  gameCommand(bridgeGamePresenter) {
    bridgeGamePresenter.getGameCommand();
  },
};

const ERROR_TYPE = {
  SIZE: "size",
  MOVING: "moving",
  GAME_COMMAND: "gameCommand",
};

module.exports = { INPUT_VAL, ERROR_TYPE, FALLBACK_FN };
