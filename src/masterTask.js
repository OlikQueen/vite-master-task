function createCard (item, wrapper) {
    const card = document.createElement('a');
    card.setAttribute('href', `/product.html#${item.id}`);
    card.classList.add('card');
  
    const title = document.createElement('h2');
    title.classList.add('card__h');
    title.innerText = item.title;
  
    const description = document.createElement('p');
    description.classList.add('card__p');
    description.innerText = item.body;
  
    card.appendChild(title);
    card.appendChild(description);
  
    wrapper.appendChild(card);
  }
  
  
  export const masterTask = () => {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  
    xhr.send();
  
    
    xhr.onload = function () {
      const otvet = JSON.parse(xhr.response);
  
      const container = document.querySelector('.container');    
  
      if (xhr.status >= 200 && xhr.status < 300) {
  
        for (const item of otvet) {
          createCard(item, container);
        }
  
      }
       else {
        console.error('Ошибка загрузки: ', xhr.statusText);
      }
    };
  
    xhr.onerror = function () {
      console.error('Ошибка запроса');
    };
  }