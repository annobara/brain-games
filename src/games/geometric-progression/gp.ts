import { IGame } from '../../game.interface';
import randomizer from '../../randomizer';

export default class GeometricProgression implements IGame {
  question = 'What number is missing in the progression?';

  private progression: number[] = [randomizer(1, 9)];

  private progressionLen: number = 10;

  private missedPosition: number = randomizer(0, this.progressionLen - 1);

  generateProgression(): void {
    const q = randomizer(2, 5);

    for (let i = 1; i < this.progressionLen; i += 1) {
      this.progression.push(this.progression[i - 1] * q);
    }
  }

  get numbers(): (number | string) [] {
    this.generateProgression();
    const numbers: (number | string) [] = [...this.progression];
    numbers[this.missedPosition] = '..';
    return numbers;
  }

  get answer(): number {
    return this.progression[this.missedPosition];
  }
}
