function request(url, cb) {  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4){
      if (xhr.status == 200) {
          cb(JSON.parse(xhr.responseText));
      } else {
        alert("Error Occured!!, on: "+url+" with response: "+error);
      }
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}


function showbooks(data) {
    const table = document.getElementById('users-table');
    document.getElementById('table-container').style.display = "block";
    data.forEach((book) => {
      const row = document.createElement('tr');
      const title = document.createElement('td');
      title.innerHTML = book.title;
      row.appendChild(title);
      const author = document.createElement('td');
      author.innerHTML = book.author;
      row.appendChild(author);
      table.appendChild(row);
    });
}


var existingBtn = document.getElementById('existing');
existingBtn.addEventListener("click", function(event){
  console.log('clicked');
  request('/show-books', showbooks);
});
