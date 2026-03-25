# CS++ JavaScript — Lesson 8.8: The Date Object

> **Lesson 8.8** | 100 Points | 6 Autograded Tests

In this assignment you will display the current date, build an elapsed-time timer that updates every 10 milliseconds, and add a toggle button to start and stop it. You will practice using the `Date` object, `setInterval`, `clearInterval`, and `addEventListener`.

---

## Table of Contents

1. [Concepts You Need](#concepts-you-need)
2. [Project Overview](#project-overview)
3. [What to Build](#what-to-build)
4. [Required IDs](#required-ids)
5. [File Structure](#file-structure)
6. [Autograding](#autograding)
7. [Try It Yourself — Practice Examples](#try-it-yourself--practice-examples)
8. [Tips for Success](#tips-for-success)
9. [FAQ](#faq)

---

## Concepts You Need

### The Date Object

JavaScript's built-in `Date` object represents a moment in time:

```javascript
let now = new Date();

now.getFullYear()   // 2025 (four-digit year)
now.getMonth()      // 0-11 (January is 0, December is 11)
now.getDate()       // 1-31 (day of the month)
now.getDay()        // 0-6 (Sunday is 0, Saturday is 6)
now.getHours()      // 0-23
now.getMinutes()    // 0-59
now.getSeconds()    // 0-59
now.getTime()       // milliseconds since Jan 1, 1970
```

> `getMonth()` is zero-based — January is 0, not 1. Add 1 when displaying the month number.

### Mapping Day Numbers to Names

`getDay()` returns 0 for Sunday through 6 for Saturday. Use an array to convert:

```javascript
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = days[now.getDay()];  // e.g., "Tuesday"
```

### setInterval and clearInterval

`setInterval` calls a function repeatedly at a fixed time interval. `clearInterval` stops it.

```javascript
// Call updateTimer every 10 milliseconds
let intervalId = setInterval(updateTimer, 10);

// Later, stop the timer
clearInterval(intervalId);
```

The first argument is the function to call (no parentheses). The second argument is the delay in milliseconds.

### Calculating Elapsed Time

```javascript
let startTime = new Date().getTime();  // capture start (in ms)

function updateTimer() {
    let now = new Date().getTime();
    let elapsed = (now - startTime) / 1000;  // convert ms to seconds
    document.getElementById("myTimer").textContent = elapsed.toFixed(2);
}
```

### addEventListener (Required)

You must use `addEventListener` to wire the button — do NOT use inline `onclick` in HTML:

```javascript
document.getElementById("myBtn").addEventListener("click", toggleTimer);
```

### Toggle Pattern

A toggle switches between two states using a boolean flag:

```javascript
let running = true;

function toggle() {
    if (running) {
        clearInterval(intervalId);
        document.getElementById("myBtn").textContent = "Start";
        running = false;
    } else {
        intervalId = setInterval(updateTimer, 10);
        document.getElementById("myBtn").textContent = "Stop";
        running = true;
    }
}
```

---

## Project Overview

Build a page that does three things:
1. Displays today's date in a specific format
2. Shows a running timer counting elapsed seconds since the page loaded
3. Has a button that toggles the timer on and off

---

## What to Build

### 1. Display the Current Date

Show the current date inside `#myDate` in this exact format:

```
DayOfWeek, M/D/YYYY
```

Examples:
- `Tuesday, 10/28/2025`
- `Monday, 1/5/2026`
- `Saturday, 12/31/2025`

Note: Month and day should NOT have leading zeros. January 5th is `1/5`, not `01/05`.

### 2. Elapsed Time Timer

When the page loads:
1. Capture the current time in milliseconds: `let start = new Date().getTime()`
2. Start a `setInterval` that runs every ~10ms
3. Each tick: calculate `(new Date().getTime() - start) / 1000` and display it in `#myTimer` with 2 decimal places

### 3. Toggle Button

The button `#myBtn` starts with the text "Stop" (since the timer starts running). When clicked:
- If the timer is running: stop the interval and change button text to "Start"
- If the timer is stopped: restart the interval and change button text to "Stop"

The timer value should freeze when stopped and continue from where it left off when restarted.

---

## Required IDs

| Element | ID | Purpose |
|---------|-----|---------|
| Div/paragraph | `myDate` | Shows the formatted date string |
| Div/paragraph | `myTimer` | Shows the elapsed time in seconds |
| Button | `myBtn` | Toggles the timer start/stop |

### Starter HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Unit 8.8 - The Date Object</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>The Date Object</h1>
    <div id="myDate"></div>
    <div id="myTimer"></div>
    <button id="myBtn">Stop</button>
</body>
</html>
```

---

## File Structure

```
JS-Date-Object/
├── index.html              <-- Page structure with required IDs
├── script.js               <-- YOUR CODE GOES HERE
└── .github/
    └── workflows/
        └── classroom.yml   <-- Autograding tests (DO NOT MODIFY)
```

---

## Autograding

| Test | What It Checks | Points |
|------|---------------|--------|
| Required elements exist | `#myDate`, `#myTimer`, `#myBtn` are present | 10 |
| Uses addEventListener (no onclick) | Button is wired with addEventListener, not inline onclick | 15 |
| Date format matches today | Text matches `DayOfWeek, M/D/YYYY` with today's actual date | 20 |
| Timer runs and increments | Timer value increases after ~120ms | 20 |
| Toggle button stops/resumes | Button text flips between Start/Stop, timer pauses/resumes | 20 |
| Elapsed time is monotonic | Timer only increases while running (never decreases) | 15 |

**Total: 100 points**

---

## Try It Yourself — Practice Examples

Create `practice.js` and run with `node practice.js`.

**Example 1 — Date formatting:**
```javascript
// practice.js — date formatting
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let now = new Date();

let dayName = days[now.getDay()];
let month = now.getMonth() + 1;  // add 1 because getMonth() is 0-based
let day = now.getDate();
let year = now.getFullYear();

console.log(dayName + ", " + month + "/" + day + "/" + year);
// Example output: Tuesday, 3/25/2025
```

**Example 2 — Elapsed time calculation:**
```javascript
// practice.js — elapsed time
let start = new Date().getTime();

// Simulate waiting 100ms
setTimeout(function() {
    let now = new Date().getTime();
    let elapsed = (now - start) / 1000;
    console.log("Elapsed: " + elapsed.toFixed(2) + " seconds");
    // Output: approximately "Elapsed: 0.10 seconds"
}, 100);
```

**Example 3 — Toggle logic simulation:**
```javascript
// practice.js — toggle pattern
let running = true;

function toggle() {
    if (running) {
        console.log("Stopping timer. Button text: Start");
        running = false;
    } else {
        console.log("Starting timer. Button text: Stop");
        running = true;
    }
}

toggle();  // Stopping timer. Button text: Start
toggle();  // Starting timer. Button text: Stop
toggle();  // Stopping timer. Button text: Start
```

---

## Tips for Success

1. Remember that `getMonth()` is zero-based — add 1 when building the date string
2. Use an array of day names to convert `getDay()` (0-6) to the full name
3. Do NOT add leading zeros to the month or day
4. Store the `setInterval` return value in a variable so you can pass it to `clearInterval`
5. When resuming the timer, you may need to adjust the start time so the elapsed time continues from where it paused (not reset to zero)
6. Use `addEventListener`, not `onclick` — the test checks for this
7. Add `defer` to your script tag so the DOM is ready before your JavaScript runs

---

## FAQ

**Q: My date shows the wrong month — why?**
`getMonth()` returns 0 for January, 1 for February, etc. You need to add 1: `now.getMonth() + 1`.

**Q: The timer resets to zero when I resume it — how do I fix this?**
When you stop the timer, save the current elapsed time. When you resume, adjust the start time so the calculation continues from where it left off:
```javascript
// When stopping:
pausedElapsed = (new Date().getTime() - startTime) / 1000;
// When resuming:
startTime = new Date().getTime() - (pausedElapsed * 1000);
```

**Q: What does "monotonic" mean?**
The timer value should only go up while running — it should never decrease. This test ensures your timer logic does not accidentally reset or jump backward.

**Q: Do I need to display hours/minutes/seconds in the timer?**
No. Just display the total elapsed seconds with 2 decimal places (e.g., `12.34`).

**Q: Should the timer start automatically when the page loads?**
Yes. The timer starts running immediately and the button starts with the text "Stop".

---

View all assignments and scoring breakdowns at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
