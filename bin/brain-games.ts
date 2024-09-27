import { greetUser, rl, sendFeedback } from '../src/cli';
import GameEngine from '../src/engine/game-engine';
import SmallestCommonMultiple from '../src/games/common-multiple/scm';
import GeometricProgression from '../src/games/geometric-progression/gp';

async function main(): Promise<void> {
  const name = await greetUser();
  const gameEngine = new GameEngine();

  let gameStatus = await gameEngine.runRounds(SmallestCommonMultiple);
  sendFeedback(gameStatus, name);

  gameStatus = await gameEngine.runRounds(GeometricProgression);
  sendFeedback(gameStatus, name);

  rl.close();
}

main();
