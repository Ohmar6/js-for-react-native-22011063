# Array Manipulation

## Student Information
- **Student ID:** 22011063

## Project Overview
This project includes several tasks focused on manipulating arrays with JavaScript functions.


### Task 1 & 2: Array Manipulation
Two functions are provided to manipulate arrays of numbers and strings:
1. **processArray:** Takes an array of numbers and returns a new array where each even number is squared and each odd number is tripled.
2. **formatArrayStrings:** Takes an array of strings and an array of numbers processed by `processArray`. Modifies each string based on its corresponding number by capitalizing the string if the number is even and converting the string to lowercase if the number is odd.

### Task 3: User Profiles
A function is provided to create user profiles:
1. **createUserProfiles:** Takes an array of original names and an array of modified names. Returns an array of objects, each containing the original name, the modified name, and an auto-incremented ID starting from 1.

## Files Included
- **arrayManipulation.js:** JavaScript file containing the `processArray` and `formatArrayStrings` functions.
- **userInfo.js:** JavaScript file containing the `createUserProfiles` function.
- **README.md:** This file, providing an overview of the project, student ID, and a brief explanation of each task.

## How to Use
1. **arrayManipulation.js:** Contains functions for processing arrays of numbers and formatting strings.
2. **userInfo.js:** Contains the function for creating user profiles based on arrays of names and modified names.

## Example Usage
### processArray and formatArrayStrings
```javascript
const inputArray = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputArray);
const strings = ["Alice", "Bob", "Charlie", "David", "Eve"];
const modifiedStrings = formatArrayStrings(strings, processedNumbers);
console.log(modifiedStrings);
// Output: ['alice', 'BOB', 'charlie', 'DAVID', 'eve']
