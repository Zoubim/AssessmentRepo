/**
 * Part B2 – Using basic data structures – Objects
 * JavaScript Assessment 2
 * Purpose: create an object, add properties to it, modify properties in it, and
 * delete properties from it 
 */

/**
 * Repository used same as part B1
 * Repo name: AssessmentRepo
 * Repo URL: https://github.com/Zoubim/AssessmentRepo.git
 */
/**
 * ----------
 * B2.2 - Build the object
 * -----------
 */

// myMovie object holding details of a single movie
const myMovie = {
    title: "The longest day",
    year: 1964
};
console.log("B2.2 Object created:", myMovie)

/**
 * ----------
 * B2.3 - Add properties and data to object
 * ----------
 */
// Add rating 5 to the object
myMovie.rating = 5;
// Add a summary: World War II movie about the normandy landings
myMovie.summary = "World War II movie about the Normandy landings"

console.log("B2.3 After adding rating and summary:", myMovie);

/**
 * --------
 * B2.4 - Change data of the properties
 * ----------
 */
// Modify rating to 4 instead of 5, and year to 1962 from 1964
myMovie.rating = 4;
myMovie.year = 1962;

console.log("B2.4 After updating rating and year:", myMovie);

/**
 * ---------
 * B2.5 - Remove summary property from object
 * ---------
 */

delete myMovie.summary;
console.log("B2.5 After removing summary:", myMovie);