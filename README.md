# CS++ JavaScript — The Date Object

> **Unit 8.8** | 100 Points | 7 Automated Tests

In this assignment you will learn how to work with JavaScript's **Date object** to display dates and build a real-time elapsed timer.

---

## Table of Contents

1. [The Date Object](#the-date-object)
2. [Getting Date Parts](#getting-date-parts)
3. [setInterval and clearInterval](#setinterval-and-clearinterval)
4. [Elapsed Time](#elapsed-time)
5. [Assignment](#assignment)
6. [Scoring Rubric](#scoring-rubric)
7. [Tips for Success](#tips-for-success)
8. [FAQ](#faq)

---

## The Date Object

Create a Date object to get the current date and time:

```javascript
let now = new Date();
```

This captures the exact moment when `new Date()` is called.

---

## Getting Date Parts

The Date object has methods to get each part of the date:

| Method | Returns | Example (for April 2, 2025) |
|--------|---------|----------------------------|
| `.getFullYear()` | 4-digit year | `2025` |
| `.getMonth()` | Month (0–11) | `3` (April is month 3, not 4!) |
| `.getDate()` | Day of month (1–31) | `2` |
| `.getDay()` | Day of week (0–6) | `3` (Wednesday) |
| `.getHours()` | Hour (0–23) | `14` |
| `.getMinutes()` | Minutes (0–59) | `30` |
| `.getSeconds()` | Seconds (0–59) | `45` |
| `.getTime()` | Milliseconds since Jan 1, 1970 | `1743580245000` |

**Important:** `.getMonth()` starts at 0, not 1. January is 0, February is 1, etc. Add 1 to get the normal month number.

**Important:** `.getDay()` returns the day of the week (0 = Sunday), NOT the day of the month. Use `.getDate()` for the day of the month.

---

## setInterval and clearInterval

`setInterval()` runs a function repeatedly at a set interval:

```javascript
let timerId = setInterval(function() {
  // this runs every 1000ms (1 second)
}, 1000);
```

`clearInterval()` stops a running interval:

```javascript
clearInterval(timerId);  // stops the repeating function
```

Always save the return value of `setInterval()` so you can stop it later.

---

## Elapsed Time

To measure how much time has passed:

```javascript
let startTime = new Date().getTime();  // milliseconds

// ... later ...

let currentTime = new Date().getTime();
let elapsed = (currentTime - startTime) / 1000;  // seconds
```

`.getTime()` returns milliseconds, so divide by 1000 to get seconds.

---

## Assignment

Complete `script.js` by following the STEP comments.

### Warm-Up: Day Name — 15 points

Display today's day name in the element with ID `warmUpDate`:
- Create a Date object
- Use `.getDay()` to get the day number (0 = Sunday)
- Use an array of day names to convert the number to a name
- Display the name (e.g., "Wednesday")

### Current Date — 20 points

Display the current date in `M/D/YYYY` format in the element with ID `myDate`:
- Use `.getMonth() + 1` for the month (remember, getMonth starts at 0!)
- Use `.getDate()` for the day
- Use `.getFullYear()` for the year
- No leading zeros: `4/2/2025` not `04/02/2025`

### Elapsed Timer — 20 points

Build a timer that counts up from 0:
- Record the start time with `new Date().getTime()`
- Use `setInterval()` with a 10ms delay
- Calculate and display elapsed seconds with `.toFixed(3)`
- Display in the element with ID `myTimer`

### Start/Stop Toggle — 25 points

Add a click event listener to the button (ID `myBtn`):
- When running: stop the timer, change text to "Start"
- When stopped: restart from 0, change text to "Stop"

### Code Quality — 20 points

- **Uses `new Date()`** — source code creates a Date object (10 points)
- **Uses `addEventListener`** — button wired with addEventListener (5 points)
- **Uses `setInterval`** — not setTimeout in a loop (5 points)

---

## Scoring Rubric

| # | Test | Points | What the autograder checks |
|---|------|--------|---------------------------|
| 1 | Day name warm-up | 15 | Correct day name in #warmUpDate |
| 2 | Uses new Date() | 10 | Source contains `new Date` |
| 3 | Uses addEventListener | 5 | Source contains `addEventListener` |
| 4 | Date in M/D/YYYY format | 20 | Correct date in #myDate |
| 5 | Timer runs and increments | 20 | #myTimer value increases over ~120ms |
| 6 | Toggle stops and restarts | 20 | Button text toggles, timer behavior changes |
| 7 | Timer is monotonic | 10 | Values only increase while running |
| | **Total** | **100** | |

---

## Tips for Success

1. **Start with the warm-up** — it's the simplest use of the Date object
2. **Remember getMonth() + 1** — this is the most common Date bug
3. **Save your interval ID** — you need it for clearInterval()
4. **Use a boolean flag** — `let running = true;` to track timer state
5. **Test the toggle** — click Stop, verify it stops. Click Start, verify it restarts from 0.

---

## FAQ

**Q: Why does getMonth() return 3 for April?**
JavaScript months are 0-indexed: January = 0, February = 1, ..., December = 11. Always add 1 when displaying.

**Q: What's the difference between getDay() and getDate()?**
`.getDay()` returns the day of the week (0 = Sunday). `.getDate()` returns the day of the month (1–31).

**Q: Why 10ms for the timer interval?**
10ms gives smooth updates. At 1000ms (1 second), the timer would look choppy.

**Q: What does `.toFixed(3)` do?**
Formats a number to 3 decimal places: `1.2` becomes `"1.200"`.

---

View all assignments at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
