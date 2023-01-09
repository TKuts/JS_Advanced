//Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
// Ми використовуємо його в тих місцях коду, де є можливість, що юзер введе непердбачувані дані і код може "лягти".
// Тому цю частину коду обертаємо в try, в catch прописуємо частину коду, яка має виповнитись, коли сталась помилка.

const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];
const divRoot = document.querySelector("#root");
const booksList = document.createElement("ul");
books.forEach(function (book, booksNumber) {
  try {
    if (!book.hasOwnProperty("author")) {
      throw new Error(`Нет автора в ${booksNumber + 1}й книге!`);
    }
    if (!book.hasOwnProperty("name")) {
      throw new Error(`Нет названия в ${booksNumber + 1}й книге!`);
    }
    if (!book.hasOwnProperty("price")) {
      throw new Error(`Нет цены в ${booksNumber + 1}й книге!`);
    }
    let { author, name, price } = book;

    let createLi = document.createElement("li");

    let liAutor = document.createElement("p");
    let liName = document.createElement("p");
    let liPrice = document.createElement("p");
    liAutor.textContent = `Author : ${author}`;
    liName.textContent = `Name : ${name}`;
    liPrice.textContent = `Price : ${price}`;

    createLi.append(liAutor, liName, liPrice);
    booksList.append(createLi);
  } catch (err) {
    console.log(err);
  }
});
divRoot.append(booksList);
