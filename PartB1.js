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
 * --------------
 * Build the array with following numbers
 * [11, 5, 8, 3, 25, 16, 31, 45, 14, 20]
 */

const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log("B1.2 Original array: ", numbers);

/**
 * --------------
 * B1.3 - Sort the array in ascending order
 * --------------
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

/**
 * --------------
 * B1.4 - Insert 19, 23 and 30 and keep the array sorted
 * --------------
 */
/**
 * InsertInOrder
 * Insert a single value into an already sorted array 
 * Array must stay in ascending order without re-sorting
 * @param {number[]} sortedArray - an array already in ascending order
 * @param {number} valueInsert - the value to insert from B1.4
 * @returns {number[]} returns updated array with new value inserted
 */
function insertInOrder(sortedArray, valueInsert) {
    let insertIndex = sortedArray.length;
    for (let i = 0; i < sortedArray.length; i++) {
        // Loop the array and compare inserted values against
        // array values - if inserted value is smaller, then
        // then insert the value into the array at that specific index
        // This way its already sorted without using a sort function
        if (sortedArray[i] > valueInsert) {
            insertIndex = i;
            break;
        }
    }
    sortedArray.splice(insertIndex, 0, valueInsert);
    return sortedArray;
}
// b14 array are the three values the question wants inserted and sorted
const b14 = [19, 23, 30];
for (const numToInsert of b14) {
    sortedNumbers = insertInOrder(sortedNumbers, numToInsert);
}
console.log("B1.4 After inserting 19, 23, 30: ", sortedNumbers);