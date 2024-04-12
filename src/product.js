export const product = () => {
    const xhr = new XMLHttpRequest();

    let productId = window.location.hash.slice(1);

    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${productId}`, true);

    xhr.send();


    xhr.onload = function () {
        const otvet = JSON.parse(xhr.response);

        const container = document.querySelector('.container');

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(otvet);

            const card = document.createElement('div');
            card.classList.add('card');

            const title = document.createElement('h2');
            title.classList.add('card__h');
            title.innerText = otvet.title;

            const description = document.createElement('p');
            description.classList.add('card__p');
            description.innerText = otvet.body;

            card.appendChild(title);
            card.appendChild(description);

            container.appendChild(card);


        }
        else {
            console.error('Ошибка загрузки: ', xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error('Ошибка запроса');
    };
}