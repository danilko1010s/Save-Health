const arrayOfGalleryImages = [
  "img/gallery1.png",
  "img/gallery2.png",
  "img/gallery3.png"
];

let galleryImage = 0;

document.getElementById("main-image").setAttribute('src', arrayOfGalleryImages[galleryImage]);

document.getElementById('right-arrow').addEventListener('click', () => {
  galleryImage = (galleryImage + 1) % arrayOfGalleryImages.length;
  document.getElementById("main-image").setAttribute('src', arrayOfGalleryImages[galleryImage]);
});

document.getElementById('left-arrow').addEventListener('click', () => {
  galleryImage = (galleryImage - 1 + arrayOfGalleryImages.length) % arrayOfGalleryImages.length;
  document.getElementById("main-image").setAttribute('src', arrayOfGalleryImages[galleryImage]);
});

const arrayOfLoveWishes = [
  "Міцного здоров'я та довгих років життя!",
  "Нехай кожен день буде сповнений енергії та сил!",
  "Бажаю тобі здоров'я, яке ніколи не підводить!"
];

document.getElementById('Wishes_btn').addEventListener('click', () => {
  const randomWish = arrayOfLoveWishes[Math.floor(Math.random() * arrayOfLoveWishes.length)];
  document.getElementById('p_Wishes').innerText = randomWish;
});

const arrayOfVitamins = [
  {
      id: 1,
      title: "Вітамін А",
      photo: "vitamin-a.png",
      description: "Вітамін А підтримує зір та імунітет.",
      rating: 4,
      type: "Кристалічний"
  },
  {
      id: 2,
      title: "Вітамін С",
      photo: "vitamin-c.png",
      description: "Вітамін С сприяє загоєнню ран.",
      rating: 5,
      type: "Водорозчинний"
  }
];

arrayOfVitamins.forEach(vitamin => {
  const divVitamin = document.createElement('div');
  divVitamin.classList.add('vitamin');

  divVitamin.innerHTML = `
      <span>${vitamin.id}</span>
      <h3>${vitamin.title}</h3>
      <hr>
      <img src="img/vitamins/${vitamin.photo}" alt="${vitamin.title}">
      <p>${vitamin.description}</p>
      <span>${'💚'.repeat(vitamin.rating) + '🤍'.repeat(5 - vitamin.rating)}</span>
      <p>${vitamin.type}</p>
  `;

  document.getElementById("p-vitamins").appendChild(divVitamin);
});