import readline from 'node:readline';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function greetUser(): Promise<string> {
  console.log('Welcome to the Brain Games!');

  return new Promise((resolve) => {
    rl.question('May I have your name? ', (name) => {
      console.log(`Hello, ${name}!`);
      resolve(name);
    });
  });
}

export function sendFeedback(isWon: boolean, name: string): void {
  if (isWon) {
    console.log(`Congratulations, ${name}!\n`);
  } else {
    console.log(`Let's try again, ${name}!\n`);
  }
}
