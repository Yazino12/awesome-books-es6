// BOOKS COLLECTION CLASS

function Book(title, author) {
  this.title = title;
  this.author = author;
}

class BookCollection {
  constructor(collectionArray) {
    this.collectionArray = collectionArray;
  }

  // CREATING BOOKS FROM ARRAY DATA AND POPULATING DYNAMICALLY

  initCollectionArray() {
    if (JSON.parse(localStorage.getItem('bookData'))) {
      this.collectionArray = JSON.parse(localStorage.getItem('bookData'));
    } else {
      this.collectionArray = [];
    }
  }

  displayDate = () => {
    const dateElement = document.querySelector('.date');

    const date = new Date();
    const options = {
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const options1 = { month: 'long', day: 'numeric' };

    const d = date.toLocaleDateString('en-US', options1);
    const all = date.toLocaleDateString('en-US', options);

    dateElement.textContent = `${d}th ${all}`;
  };

  render = () => {
    this.initCollectionArray();

    const listItemNav = document.querySelector('.menu-item1');
    const addItemNav = document.querySelector('.menu-item2');
    const contactItemNav = document.querySelector('.menu-item3');

    const mainContainer = document.querySelector('.main-section');

    const listContent = `   
        <section class="list">
          <h1>All awesome books</h1>
          <div class="container">
  
          </div>
        </section>`;
    mainContainer.innerHTML = '<p class="date"></p>';
    mainContainer.innerHTML += listContent;

    this.collectionArray.forEach((book) => {
      const container = document.querySelector('.container');
      const content = `<div class="book">
          <div class="left">
            <p>${book.title}</p>
            <p>by</p>
            <p>${book.author}</p>
          </div>
            <button class="remove">Remove</button>
        </div>`;
      container.innerHTML += content;
    });

    listItemNav.addEventListener('click', () => {
      this.initCollectionArray();

      mainContainer.innerHTML = '<p class="date"></p>';
      mainContainer.innerHTML += listContent;
      this.displayDate();

      this.collectionArray.forEach((book) => {
        const container = document.querySelector('.container');
        const content = `<div class="book">
            <div class="left">
              <p>${book.title}</p>
              <p>by</p>
              <p>${book.author}</p>
            </div>
              <button class="remove">Remove</button>
          </div>`;
        container.innerHTML += content;
      });
      this.removeBook();
    });

    addItemNav.addEventListener('click', () => {
      mainContainer.innerHTML = '<p class="date"></p>';
      this.displayDate();
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

      mainContainer.innerHTML += addContent;

      const form = document.querySelector('.book-form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const { title, author } = form.elements;
        const formData = new Book(title.value, author.value);
        this.addBook(formData);
        title.value = '';
        author.value = '';
      });
    });

    contactItemNav.addEventListener('click', () => {
      mainContainer.innerHTML = '<p class="date"></p>';
      this.displayDate();
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

      mainContainer.innerHTML += contactContent;
    });
    this.displayDate();
  };

  // Add books

  addBook = (data) => {
    if (data) {
      this.collectionArray.push(data);
      localStorage.setItem('bookData', JSON.stringify(this.collectionArray));
    }
  };

  // Remove books

  removeBook = () => {
    const buttonsRemove = document.querySelectorAll('.remove');
    const book = document.querySelectorAll('.book');

    buttonsRemove.forEach((button, i) => {
      button.addEventListener('click', () => {
        book[i].remove();
        this.collectionArray.splice(i, 1);
        localStorage.setItem('bookData', JSON.stringify(this.collectionArray));
      });
    });
  };
}

const arrayCollection = new BookCollection(
  JSON.parse(localStorage.getItem('bookData'))
);
arrayCollection.render();
arrayCollection.addBook();
arrayCollection.removeBook();
