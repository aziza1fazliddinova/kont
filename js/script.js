/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
}

for(let item of movieDB.movies) {
    let li = document.createElement('li')
    let div = document.createElement('div')
    
    li.classList.add('promo__interactive-item')
    div.classList.add('delete')
    li.innerHTML = item

    li.append(div)
    ul.append(li)

}

let right = document.querySelectorAll('.promo__adv img');
right.forEach((item) => {
    item.remove();
});

let h1 = document.querySelector('.promo__genre')
h1.innerHTML = 'ДРАМА'


let zadniy = document.querySelector('.promo__bg');
zadniy.style = 'background: url("./img/bg.jpg") center/cover no-repeat;';
