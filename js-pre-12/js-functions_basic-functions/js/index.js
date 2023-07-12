console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

const Title = "The Lord of the Javascript";
const author = "Mario";
const rating = 4.2;
const Sales = 120;

const book = {
  Title: "The Lord of the Javascript",
  author: "Mario",
  rating: 4.2,
  Sales: 120,
};

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
book.Sales = 322;
book.rating = 4.5;

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log(book.Title);
  console.log(book.author);
  console.log(book.rating);
  console.log(book.Sales);
}

logBookData();

book.Sales += 200;

logBookData();

book.Sales += 200;

logBookData();

// --^-- write your code here --^--
