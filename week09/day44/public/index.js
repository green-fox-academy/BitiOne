'use strict';

let postContainer = document.querySelector('#posts');

window.addEventListener('load', () => {
  fetch('http://localhost:3000/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => {
    if(response.status !== 200) {
      throw new Error('Nincs válasz!');
    }
    return response;
  })
  .then(response => response.json())
  .then(result => {
    console.log(result);
    for(let i = 0; i < result.length; i++) {
      let score = result[i].score;
      let title = result[i].title;
      let url = result[i].url;
      console.log(score);
      console.log(title);
      console.log(url);
    }
  })
  .catch(err => {
    console.log('nem orulunk Vincent');
  })
});

function createPostForm(score, title, url) {
  let postContainer = document.createElement('div');
  let postScore = document.createElement('p');
  let postTitle = document.createElement('a');
  let postFooter = document.createElement('p');

}