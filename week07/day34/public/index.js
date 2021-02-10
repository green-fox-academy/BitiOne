'use stict';

window.onload = () => {
  fetch('/book', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if(response.status !== 200) {
      throw new Error('Nincs válasz!');
    } else {
      return response;
    }
  })
  .then(responseObject => responseObject.json())
  .then(responseObjecttoJson => {
    console.log(responseObjecttoJson);
    createNewListElements(responseObjecttoJson);
  })
  .catch(err => {
    console.log('/book get error!');
  })
}

function createNewListElements(listOfBooks) {
  const containerDiv = document.querySelector('#container');
  
  for(let i = 0; i < listOfBooks.length; i++) {
    const listElement = document.createElement('li');
    listElement.innerText = listOfBooks[i].book_name;
    containerDiv.appendChild(listElement);
  }
}