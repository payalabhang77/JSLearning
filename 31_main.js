
const listHeading = document.querySelector('#listHeading');
listHeading.style.color = 'Red';

const titleElement = document.querySelector('#title');
titleElement.addEventListener('mouseover', ()=>{
    titleElement.style.color = 'blue';
} );


const list = document.querySelector('#list');
const agileJira = document.querySelector('#agile');
list.removeChild(agileJira);

const bodyElement = document.querySelector('body');
bodyElement.addEventListener('mouseover', ()=>{
    bodyElement.style.backgroundColor = 'violet';
} );




