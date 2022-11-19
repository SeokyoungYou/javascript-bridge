const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const BridgeMaker = require("../BridgeMaker");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeModel;

  playerMap;

  totalTrial;

  constructor() {
    this.playerMap = [];
    this.totalTrial = 1;
  }

  start() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this);
  }

  createBridgeModel(size) {
    this.bridgeModel = BridgeMaker.makeBridge({
      size,
      generateRandomNumber: this.generateRandomNumber,
    });
    this.getPlayerMove();
  }

  getPlayerMove() {
    InputView.readMoving(this);
  }

  generateRandomNumber() {
    return BridgeRandomNumberGenerator.generate();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(selectedMove) {
    const isMove = this.bridgeModel.crossBridge({
      bridgeIndex: this.playerMap.length,
      selectedMove,
    });
    this.playerMap.push({ [selectedMove]: isMove });
    OutputView.printMap(this, this.playerMap);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;