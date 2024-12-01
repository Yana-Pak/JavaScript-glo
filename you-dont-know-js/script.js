
// Восстановить порядок книг.
const listBook = document.querySelector('.books')
const book = document.querySelectorAll('.book')
// console.log(listBook)
console.log(book)
book[0].before(book[1])
listBook.append(book[2])
book[4].after(book[3])

// Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = " url(./image/you-dont-know-js.jpg)"

// Исправить заголовок в книге 3(Получится - "Книга 3. this и Прототипы Объектов")

const titleBook = document.querySelectorAll('.book h2 a')
console.log(titleBook)
titleBook[2].textContent = "Книга 3. this и Прототипы Объектов"

// Удалить рекламу со страницы
const advertising = document.querySelector('.adv')
advertising.remove()


// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
const chapterBookTwo = book[0].querySelectorAll(' ul li')
console.log(chapterBookTwo)
chapterBookTwo[3].after(chapterBookTwo[6])
chapterBookTwo[9].after(chapterBookTwo[2])
chapterBookTwo[4].before(chapterBookTwo[8])

const chapterBookFive = book[5].querySelectorAll(' ul li')
console.log(chapterBookFive)
chapterBookFive[4].after(chapterBookFive[2])
chapterBookFive[7].after(chapterBookFive[5])
chapterBookFive[3].before(chapterBookFive[9])


// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const newChapter = document.createElement('li')
newChapter.textContent = "Глава 8: За пределами ES6"

const chapterBookSix = book[2].querySelectorAll(' ul li')
console.log(chapterBookSix)
chapterBookSix[8].after(newChapter)




