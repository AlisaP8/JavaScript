'use strict';
let btn = document.querySelectorAll('button'); // 1. получаем все кнопки и сохраняем в переменную
btn.forEach(function (button) { // 1.1 итерируемся по кнопкам и каждой из
    button.addEventListener('click', function (event) {  // них добавляем обработчик клика - функцию handleClick
        handleClick(event)
    })
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;// 2. из объекта события получаем ссылку на .product и
    // сохраняем в переменную:
    // const cardNode = ;

    // 3. создаем литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // элемент с классом .product
        img: cardNode.querySelector('img'), // картинка внутри .product
        productName: cardNode.querySelector('.productName'), // .productName, который внутри .product
        button: cardNode.querySelector('button'), // button, который внутри .product
    };

    // 4. получаем текст на кнопке, которая внутри .product
    let text = card.button.innerText;
    if (text === "Подробнее") { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        showMoreText(card);  // 4.2 если да, то передаем объект card в функцию showMoreText
    } else if (text === "Отмена") { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        hideMoreText(card);  // 4.4 если да, то передаем объект card в функцию hideMoreText
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = 'block'; // 5. картинке внутри .product ставим стиль display: block
    card.wrap.querySelector('.desc').remove(); // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    card.button.innerText = 'Подробнее'; // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    card.img.style.display = 'none'; // 6. картинке внутри .product ставим display: none
    const newText = 'Lorem insput dolores flepe kdsa'; // 6.1 сохраняем произвольный текст в переменную
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${newText}</div>`); // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    card.button.innerText = 'Отмена'; // 6.3 внутри .product у кнопки текст ставим "Отмена"
}