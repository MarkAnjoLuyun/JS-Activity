let library = [
  {
    title: "Noli Me Tangere",
    author: "Jose Rizal",
    isAvailable: true,
  },
  {
    title: "When the Elephants Dance",
    author: "Tess Uriza Holthe",
    isAvailable: true,
  },
  {
    title: "Macarthur",
    author: "Bob Ong",
    isAvailable: true,
  },
];

console.log("Library:", library);

displayAvailableBooks = function () {
  console.log("Available Books:");
  library.forEach((book) => {
    if (book.isAvailable) {
      console.log(`- ${book.title} by ${book.author}`);
    }
  });
};

function borrowBook(title) {
  const book = library.find((book) => book.title === title);

  if (book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      console.log(`You have borrowed "${book.title}".`);
    } else {
      console.log(`"${book.title}" is already borrowed.`);
    }
  } else {
    console.log(`"${title}" is not in this library.`);
  }
}

displayAvailableBooks();

borrowBook("Noli Me Tangere");
borrowBook("El Filibusterismo");
borrowBook("Noli Me Tangere");

displayAvailableBooks();
