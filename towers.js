const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3,2,1], [], []];
  }

  isValidMove(start, end) {
    if (start < 0 || start > 2 || end < 0 || end > 2) {
      return false;
    }

    let endDisc = this.stacks[end][this.stacks[end].length - 1];
    let startDisc = this.stacks[start][this.stacks[start].length - 1];

    if (startDisc === undefined || startDisc > endDisc) {
      return false;
    } else {
      return true;
    }
  }

  move(start, end, endCB) {
    if (this.isValidMove(start, end)) {
      let temp = this.stacks[start].pop();
      this.stacks[end].push(temp);

      if (!this.isWon()) {
        this.promptMove(this.move, endCB);
      }
    } else {
      console.log("Invalid move");
      this.promptMove(this.move, endCB);
    }
    return;
  }

  isWon() {
    let solution = [3, 2, 1];
    for(let i = 0; i < 3; i++) {
      if (this.stacks[2][i] !== solution[i]) {
        return false;
      }
    }
    return true;
  }

  promptMove(callback, endCallback) {
    console.log(JSON.stringify(this.stacks));
    let that = this;

    reader.question("Where do you want to move from? ", function (start) {
      reader.question("Where do you want to move to? ", function (end) {
        let boundCallback = callback.bind(that);
        boundCallback(start, end, endCallback);

        if (that.isWon()) {
          endCallback();
          reader.close();
          return;
        }
      });
    });
  }

  run(completionCallback) {
    this.promptMove(this.move, completionCallback);
    return;
  }
}

let g = new Game;
g.run(() => console.log('You win!'));
