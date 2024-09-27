import { IGame } from '../game.interface';
import { rl } from '../cli';

export default class GameEngine {
  private game!: IGame;

  private userAnswer: string = '';

  private roundNumber = 3;

  private isWon = false;

  private askQuestion(): void {
    console.log(this.game.question);
    console.log(`Question: ${this.game.numbers.join(', ')}`);
  }

  private getAnswer(): Promise<void> {
    return new Promise<void>((resolve) => {
      rl.question('Your answer: ', (answer) => {
        this.userAnswer = answer;
        resolve();
      });
    });
  }

  private checkAnswer(): void {
    if (+this.userAnswer === this.game.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${this.userAnswer}' is wrong answer ;(. Correct answer was '${this.game.answer}'`);
    }
    this.isWon = +this.userAnswer === this.game.answer;
  }

  async startGame(): Promise<boolean> {
    this.askQuestion();
    await this.getAnswer();
    this.checkAnswer();
    return this.isWon;
  }

  async runRounds(GameClass: new () => IGame, currentRound: number = 1): Promise<boolean> {
    this.game = new GameClass();
    this.isWon = await this.startGame();
    if (this.isWon && currentRound < this.roundNumber) {
      await this.runRounds(GameClass, currentRound + 1);
    }
    return this.isWon;
  }
}
