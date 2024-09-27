import { IGame } from '../../game.interface';
import randomizer from '../../randomizer';

export default class SmallestCommonMultiple implements IGame {
  question = 'Find the smallest common multiple of given numbers';

  private minNumber = 1;

  private maxNumber = 100;

  private generatedNumbers: number[] = [];

  get numbers(): number[] {
    for (let i = 0; i < 3; i += 1) {
      this.generatedNumbers.push(randomizer(this.minNumber, this.maxNumber));
    }
    return this.generatedNumbers;
  }

  get answer(): number {
    return SmallestCommonMultiple
      .scmThreeNums(this.generatedNumbers[0], this.generatedNumbers[1], this.generatedNumbers[2]);
  }

  static gcd(a: number, b: number): number {
    let firstNum = a;
    let secondNum = b;
    let temp;
    while (secondNum) {
      temp = secondNum;
      secondNum = firstNum % secondNum;
      firstNum = temp;
    }
    return Math.abs(firstNum);
  }

  static scm(a: number, b: number): number {
    return Math.abs((a * b) / this.gcd(a, b));
  }

  static scmThreeNums(a: number, b: number, c: number): number {
    return this.scm(this.scm(a, b), c);
  }
}
