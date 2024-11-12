const myName = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myName.filter((num) => {
    return num > 4;
});
console.log(result);  // Outputs: [5, 6, 7, 8, 9, 10]

const books = [
    {
        title: 'Book one', genre: 'fiction', public: 1981,
        edition: 2024
    },
    {
        title: 'Book one', genre: 'fiction', public: 1981,
        edition: 2024
    },
    {
        title: 'Book one', genre: 'fiction', public: 1981,
        edition: 2024
    },
    {
        title: 'Book one', genre: 'ficti', public: 1981,
        edition: 2023
    },
    {
        title: 'Book one', genre: 'fiction', public: 1981,
        edition: 2022
    },
    {
        title: 'seven one', genre: 'Math', public: 1981,
        edition: 2021
    },
    {
        title: 'Book one', genre: 'chemistry', public: 1981,
        edition: 2020
    },
    {
        title: 'Book one', genre: 'biological', public: 1999,
        edition: 2019
    },
    {
        title: 'Book one', genre: 'Math', public: 1981,
        edition: 2018
    },
];

// Filter books with genre 'Math'
let userBooks = books.filter((bk) => bk.genre === 'Math');

// Further filter books published in or after the year 2000
userBooks = userBooks.filter((bk) => bk.edition >= 2000);

console.log(userBooks);
