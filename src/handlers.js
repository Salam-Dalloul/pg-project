const fs = require('fs');
const getData = require('./queries/getData');
const insertData = require('./queries/insertData');
const querystring = require('querystring');

const handleHomePages = (request, response) => {
  fs.readFile(`${__dirname}/../public/index.html`, (error, file) => {
    if (error) {
    response.writeHead(500, 'Content-Type:text/html');
    response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
    console.log(error);
    }
    else {
      response.writeHead(200, {'content-type': 'text/html'});
      response.end(file);
    }
  })
}

const handleShowBooks = (request, response) => {
  getData((error, res) =>{
    if(error){
      response.writeHead(500, {'content-type': 'text/html'});
      response.end(error);
    }
    else {
      const output = JSON.stringify(res);
      response.writeHead(200, {'content-type': 'application/json'});
      response.end(output);
    }
  })
}

const handleAddBook = (request, response) => {
  let data = '';
  request.on('data', (chunk) => {
    data += chunk;
  })
  request.on('end', ()=>{
    const title = querystring.parse(data).title;
    const author = querystring.parse(data).author;
    insertData(title, author, (err, res) => {
      if (err){
      response.writeHead(500, 'Content-Type:text/html');
      response.end('<h1>Sorry, there was a problem adding that user</h1>');
      console.log(err);
      }
    })
    response.writeHead(200, {'content-type': 'text/html'});
    fs.readFile(`${__dirname}/../public/index.html`, (err, file) => {
      if (err) {
        console.log(err);
      }
      else {
        response.end(file);
      }
    })
  })
}

const handleGeneric = (request, response) => {
  const fileName = request.url;
  const fileType = request.url.split('.')[1];
  fs.readFile(`${__dirname}/../public${fileName}`, (error, file) => {
    if (error) {
      response.writeHead(500, 'Content-Type:text/html');
      response.end('<h1>Sorry, there was a problem loading this page</h1>');
      console.log(error);
    } else {
      response.writeHead(200, {
        'Content-Type': `text/${fileType}`,
      });
      response.end(file);
    }
  });
};

module.exports = {
  handleHomePages,
  handleAddBook,
  handleGeneric,
  handleShowBooks
}
