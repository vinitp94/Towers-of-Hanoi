class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.

    this.date = new Date();
    this.hour = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;

    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hour += 1;
    }
    if (this.hour >= 24) {
      this.hour = 0;
    }
    this.printTime();
  }
}

const clock = new Clock();
