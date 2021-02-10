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
  });

  fetch('/information', {
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
    createNewTableElements(responseObjecttoJson);
  })
  .catch(err => {
    console.log('/book get error!');
  });
};

function createNewListElements(listOfBooks) {
  const containerDiv = document.querySelector('#container');
  
  for(let i = 0; i < listOfBooks.length; i++) {
    const listElement = document.createElement('li');
    listElement.innerText = listOfBooks[i].book_name;
    containerDiv.appendChild(listElement);
  }
}

function createNewTableElements(informationsOfBooks) {
  const bodyOfTable = document.querySelector('#tableBody');

  for(let i = 0; i < informationsOfBooks.length; i++) {
    const newTableRow = document.createElement('tr');

    const newTableCellTitle = document.createElement('td');
    const newTableCellAuthor = document.createElement('td');
    const newTableCellCategory = document.createElement('td');
    const newTableCellPublisher = document.createElement('td');
    const newTableCellPrice = document.createElement('td');

    newTableCellTitle.innerText = informationsOfBooks[i].book_name;
    newTableCellAuthor.innerText = informationsOfBooks[i].aut_name;
    newTableCellCategory.innerText = informationsOfBooks[i].cate_descrip;
    newTableCellPublisher.innerText = informationsOfBooks[i].pub_name;
    newTableCellPrice.innerText = informationsOfBooks[i].book_price;

    newTableRow.appendChild(newTableCellTitle);
    newTableRow.appendChild(newTableCellAuthor);
    newTableRow.appendChild(newTableCellCategory);
    newTableRow.appendChild(newTableCellPublisher);
    newTableRow.appendChild(newTableCellPrice);

    bodyOfTable.appendChild(newTableRow);
  }
}