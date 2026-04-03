// ============================================
//  Unit 8.8 – The Date Object
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() for the button.
//  Do NOT add onclick in the HTML.
// ============================================


// ============================================
//  WARM-UP: Day Name
// ============================================
// Display today's day name (e.g., "Monday") in the
// element with ID "warmUpDate".

// STEP 1: Create a new Date object using: let now = new Date();

// STEP 2: Use .getDay() to get the day of the week as a number.
//         Sunday = 0, Monday = 1, Tuesday = 2, ... Saturday = 6

// STEP 3: Create an array of day names:
//         let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
//                     "Thursday", "Friday", "Saturday"];

// STEP 4: Use the day number as an index to get the day name
//         from the array.

// STEP 5: Display the day name in the element with ID "warmUpDate"
//         using document.getElementById("warmUpDate").textContent


// ============================================
//  PART 1: Current Date Display
// ============================================
// Display the current date in the format: M/D/YYYY
// in the element with ID "myDate".
// Example: "4/2/2025" (no leading zeros)

// STEP 6: Create a new Date object (or reuse the one from above).

// STEP 7: Get the month using .getMonth()
//         IMPORTANT: .getMonth() returns 0–11 (January = 0)
//         so you must add 1 to get the correct month number.

// STEP 8: Get the day of the month using .getDate()

// STEP 9: Get the year using .getFullYear()

// STEP 10: Build the date string: month + "/" + day + "/" + year
//          Display it in the element with ID "myDate"


// ============================================
//  PART 2: Elapsed Timer
// ============================================
// Build a timer that counts up from 0, updating every ~10ms.
// Display the elapsed time in seconds (e.g., "1.230") in
// the element with ID "myTimer".

// STEP 11: Record the start time using new Date().getTime()
//          This gives you the current time in milliseconds.

// STEP 12: Create a variable to hold the timer ID (for stopping later).
//          Use setInterval() with a delay of 10 milliseconds.
//          Inside the interval function:
//          a) Get the current time: new Date().getTime()
//          b) Calculate elapsed seconds: (currentTime - startTime) / 1000
//          c) Display the elapsed time using .toFixed(3)
//             in the element with ID "myTimer"


// ============================================
//  PART 3: Start/Stop Toggle Button
// ============================================
// The button starts as "Stop" (timer is running).
// Clicking it should:
//   - If timer is running: stop it (clearInterval) and
//     change button text to "Start"
//   - If timer is stopped: restart it from 0 and change
//     button text to "Stop"

// STEP 13: Create a variable to track whether the timer is
//          currently running (let running = true;)

// STEP 14: Add a click event listener to the button (ID "myBtn").
//          Inside the listener:
//          a) If running is true:
//             - Use clearInterval() to stop the timer
//             - Change button textContent to "Start"
//             - Set running to false
//          b) If running is false:
//             - Record a new start time
//             - Start a new setInterval (same as STEP 12)
//             - Change button textContent to "Stop"
//             - Set running to true
