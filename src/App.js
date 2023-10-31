import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.name = "";
    this.turn = 0;
  }
  async readUserRacingCars() {
    await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    ).then((input) => (this.name = input));
  }
  async readUserRacingTry() {
    await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n").then(
      (input) => (this.turn = input)
    );
  }

  splitRacingCarBy(ch) {
    const racingCars = this.name.split(ch);
    this.name = racingCars;
  }

  validateUserRacingCars(input = this.name) {
    const length = input.length;
    if (length > 5) {
      throw new Error("[ERROR] 차의 이름은 5자 이하만 가능합니다.");
    }
  }

  async play() {
    await this.readUserRacingCars();
    await this.readUserRacingTry();
    this.splitRacingCarBy(",");
  }
}
const app = new App();
app.play();

export default App;
