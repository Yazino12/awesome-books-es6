const book = (bookArray) => {
  const container = document.querySelector('.container');
  if (bookArray.length > 0) {
    bookArray.forEach((book) => {
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
  } else {
    container.innerHTML = '<h3 class="add-books">Add Books!</h3>';
  }
};

export default book;
