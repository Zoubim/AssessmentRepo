/**
 * Part B1 - Data structures and algorithms - Simple data types
 * JavaScript Assessment 2
 */

/**
 * Repository created
 * 
 */

/**
 * --------------
 * B1.2
 * Build the array with following numbers
 * [11, 5, 8, 3, 25, 16, 31, 45, 14, 20]
 */

const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log("B1.2 Original array: ", numbers);

/**
 * B1.3 - Sort the array in ascending order
 */

/**
 * sortAscending
 * Returns a new array sorted from smallest to largest
 * A compare function is required because the default sort() converts
 * values to strings, which would order 11 before 5
 * @param {number[]} inputArray - the array of numbers to sort
 * @returns {number[]} a new array in ascending order
 */

function sortAscending(inputArray) {
    // sortedArray: a copy of the input so the original stays as is
    const sortedArray = [...inputArray];
    // sort() is a built-in function that sorts "obviously"
    // firstValue - secondValue so that the sort() function 
    // sorts the numbers and not the string values
    sortedArray.sort(function (firstValue, secondValue) {
        return firstValue - secondValue;
    });
    return sortedArray;
}
//B1.2 sorted smallets to largest
let sortedNumbers = sortAscending(numbers);
console.log("B1.3 Sorted array Ascending: ", sortedNumbers); 