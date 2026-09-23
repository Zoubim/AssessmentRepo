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