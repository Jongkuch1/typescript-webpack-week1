class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number,
  ) {}
}

interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

const reviews: Review[] = [];

function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");

  if (!bookList) {
    return;
  }

  const bookDiv = document.createElement("div");
  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
  bookList.appendChild(bookDiv);
}

function addReview(bookId: number, rating: number, comment: string): Review {
  const review: Review = { bookId, rating, comment };
  reviews.push(review);
  return review;
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

displayBook(book1);
displayBook(book2);

addReview(1, 5, "Classic fantasy adventure.");
addReview(2, 5, "Epic and immersive.");