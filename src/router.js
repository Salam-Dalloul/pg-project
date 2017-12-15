const handlers = require('./handlers');

const router = (request, response) => {
  const endpoint = request.url.split('/')[1];
  if(endpoint === ''){
    handlers.handleHomePages(request, response);
  }
  else if (endpoint === 'add-book') {
    handlers.handleAddBook(request, response);
  }
  else if (endpoint === 'show-books') {
    handlers.handleShowBooks(request, response);
  }
  else {
    handlers.handleGeneric(request, response);
  }
}

module.exports = router;
