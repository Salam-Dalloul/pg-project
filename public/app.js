function request(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(null, xhr.responseText);
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

function showbooks(data) {
  console.log(data);
    const books = JSON.parse(data);
    const table = document.getElementById('user-table');
    var existingBtn = document.getElementById('existing')
    existingBtn.addEventListener("click", function(event){
    document.getElementById('table-container').style.display = "block";
    books.forEach((book) => {
      const row = document.createElement('tr');
      const title = document.createElement('td');
      title.innerHTML = book.title;
      row.appendChild(title);
      const author = document.createElement('td');
      author.innerHTML = book.author;
      row.appendChild(author);
      table.appendChild(row);
    });
  });

}

request('/show-books', showbooks);
