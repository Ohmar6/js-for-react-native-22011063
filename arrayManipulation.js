

/**
 * Function to process an array of numbers.
 * Each even number is squared and each odd number is tripled.
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} - The processed array.
 */
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Example usage:
// const inputArray = [1, 2, 3, 4, 5];
// console.log(processArray(inputArray)); 
// Output: [3, 4, 9, 16, 15]


/**
 * Function to format an array of strings based on a corresponding array of numbers.
 * Capitalizes the entire string if the number is even.
 * Converts the string to lowercase if the number is odd.
 * @param {string[]} strArr - The array of strings to format.
 * @param {number[]} numArr - The array of numbers processed by processArray.
 * @returns {string[]} - The formatted array of strings.
 */
function formatArrayStrings(strArr, numArr) {
    if (strArr.length !== numArr.length) {
        throw new Error("The two arrays must have the same length.");
    }

    return strArr.map((str, index) => {
        return numArr[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage:
// const inputArray = [1, 2, 3, 4, 5];
// const processedNumbers = processArray(inputArray);
// const strings = ["hello", "world", "javascript", "is", "fun"];
// console.log(formatArrayStrings(strings, processedNumbers));
// Output: ['hello', 'WORLD', 'javascript', 'IS', 'fun']

