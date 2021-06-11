document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
    document.querySelector('#new-item-form').addEventListener('submit', handleButt);
  })
  
  const handleButt = function(event){
    event.preventDefault();
    console.log('touch my butt');
    const author = event.target.author.value;
    const title = event.target.title.value;
    const category = event.target.category.value;
  
    const newList = document.createElement('ul');
    newList.classList.add('newbook');
  
    const newAuth = document.createElement('li');
    newAuth.textContent = author;
    newAuth.classList.add('author')
    const newTitle = document.createElement('li');
    newTitle.textContent = title;
    newTitle.classList.add('title')
    const newCat = document.createElement('li');
    newCat.textContent = category;
    newCat.classList.add('cat')
  
    newList.appendChild(newAuth);
    newList.appendChild(newTitle);
    newList.appendChild(newCat);
  
    document.querySelector('#reading-list').appendChild(newList);
  
  
    document.querySelector('#titleDiv').animate(
      {transform:['rotate(0deg) translateX(0px) translateY(0px)', 'rotate(360deg)  translateX(0px) translateY(0px)']},
      {duration: 1000, iterations: 2}
    );
  
  }
  
  