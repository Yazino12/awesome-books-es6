import Book from './book.js';
import Form from './form.js';

const addItemNav = document.querySelector('.menu-item2');
const contactItemNav = document.querySelector('.menu-item3');

const mainContainer = document.querySelector('.main-section');

const listGenerator = (bookArray) => {
  const listContent = `   
        <section class="list">
          <h1>All awesome books</h1>
          <div class="container">
            </div>
        </section>`;
  mainContainer.innerHTML = listContent;

  Book(bookArray);
};

const addItems = (addBook) => {
  addItemNav.addEventListener('click', () => {
    const addContent = `
            <section class="add">
            <h2>Add a new book</h2>
            <form class="book-form" method="post" action="/">
              <input
                name="title"
                id="title"
                type="text"
                maxlength="30"
                placeholder="Title"
                required
              />
              <label for="title" hidden></label>
              <input
                name="author"
                id="author"
                type="text"
                maxlength="30"
                placeholder="Author"
                required
              />
              <label for="author" hidden></label>
              <div><button type="submit">Add</button></div>
            </form>
          </section>`;

    mainContainer.innerHTML = addContent;

    Form(addBook);
  });
};

const contact = () => {
  contactItemNav.addEventListener('click', () => {
    const contactContent = `
            <section class="contact">
            <h2>Contact information</h2>
            <div class="contact-lower">
              <p>
                Do you have any question or you just want to say "Hello"? <br />
                You can reach out to us!
              </p>
              <ul>
                <li>Our email: mail@mail.com</li>
                <li>Our phone number: 004422335566889</li>
                <li>Our Address: Streetname 22, 84503 City, Country</li>
              </ul>
            </div>
          </section>`;

    mainContainer.innerHTML = contactContent;
  });
};

export { listGenerator, addItems, contact };
