import { MissionUtils } from "@woowacourse/mission-utils";

class RacingGame {
  #racingCars = {};
  #attempt;

  constructor(cars) {
    cars.split(",").forEach((key) => (this.#racingCars[key] = ""));
  }

  setRacingAttempt(attempt) {
    this.#attempt = attempt;
  }

  get getRacingCarsName() {
    return Object.keys(this.#racingCars);
  }

  get getRacingAttempt() {
    return this.#attempt;
  }

  get getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  get isMove() {
    if (this.getRandomNumber >= 4) {
      return 1;
    }
    return 0;
  }

  move(car) {
    if (this.isMove) {
      this.#racingCars[car] += "-";
    }
    return this.#racingCars[car].length;
  }

  get raceScore() {
    const score = [];
    Object.keys(this.#racingCars).forEach((car) => {
      score.push([car, this.move(car)]);
    });
    return score;
  }
}

export default RacingGame;
