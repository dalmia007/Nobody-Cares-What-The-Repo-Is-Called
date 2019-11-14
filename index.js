// ### Challenge
// Figure out the pattern used to add the dash ('-') to the numbers by looking at the test and write a function for it.
// IMPORTANT: The resulting string cannot begin or end with a dash ('-').
// GOOD LUCK!👍

// ### Examples
// dash(274) // returns "2-7-4"
// dash(5311) //returns "5-3-1-1"
// Refer to Test for More Examples

function dash(num) {

  if (!isNaN(num)) {                  // Checks if the argument is NaN
    return String(num)                  // Converts the number to a string
      .replace(/[13579]/g,'-$&-')         // Adds dash - before and after every odd number
      .replace(/--/g, '-')                  // Replaces two dashes --  with a single dash - incase of two consecutive odd numbers
      .replace(/^-|-$/g,'');                  // Gets rid of the dash - from the end and the start
  } else {
    return 'NaN'                                // Returns 'NaN' from the first if statement if argument is not a number
  }
  
};


module.exports = dash;