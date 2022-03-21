// IMPORT EXTERNAL MODULES
import DisplayDate from './modules/date.js';
import {
  listGenerator as List,
  addItems as AddItems,
  contact as Contact,
} from './modules/sections.js';

// BOOKS COLLECTION CLASS

class BookCollection {
  constructor(collectionArray) {
    this.collectionArray = collectionArray;
  }

  // CREATING BOOKS FROM ARRAY DATA AND POPULATING DYNAMICALLY

  render = () => {
    DisplayDate();

    // At Render

    List(this.collectionArray);

    // Navigation Sections
    const listItemNav = document.querySelector('.menu-item1');

    listItemNav.addEventListener('click', () => {
      List(this.collectionArray);
      this.removeBook();
    });

    AddItems(this.addBook);

    Contact();
  };

  // Add books Method

  addBook = (data) => {
    if (data) {
      this.collectionArray.push(data);
      localStorage.setItem('bookData', JSON.stringify(this.collectionArray));
    }
  };

  // Remove books Method

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
  JSON.parse(localStorage.getItem('bookData')),
);
arrayCollection.render();
arrayCollection.addBook();
arrayCollection.removeBook();
