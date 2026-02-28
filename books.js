function insertBooks(books) {
  let str = `<div class="wrap">`;
  for (let i = 0; i < books.length; i++) {
    str += `<div class="bookWrap">`;
    str += `<div class="image"><img src="${books[i].imageCover}" /></div>`;
    str += `<p>${books[i].category}</p>`;
    str += `<h2>${books[i].name}</h2>`;
    str += `<p>${books[i].author}</p>`;
    str += `</div>`;
  }

  str += `</div>`;
  document.getElementById("books").innerHTML = str;
}

// fetch("books.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     //console.log(data);
//     insertBooks(data);
//   });

async function loadBooks() {
  let url = "./books.json";
  let response = await fetch(url);
  let data = await response.json();
  insertBooks(data);
}

loadBooks();
