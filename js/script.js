document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-image");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  let currentIndex = 0;

  function updateGallery() {
    images.forEach((img, index) => {
      img.classList.toggle("active", index === currentIndex);
      img.style.transition = "opacity 0.5s ease-in-out"; // Ensure smooth transitions
    });
  }

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  });

  // Initialize the gallery
  updateGallery();

  const btnBuyPills = document.getElementById("btn-buy-pills");
  const btnHealthWishes = document.getElementById("btn_health_wishes");
  const countOfPills = document.getElementById("count-of-pills");
  const pHealthWishes = document.getElementById("p-health-wishes");

  let pillStock = 0;
  const adviceList = [
    "Пийте більше води для гарного самопочуття.",
    "Робіть зарядку щоранку для енергії.",
    "Відпочивайте достатньо, щоб уникнути стресу.",
    "Їжте більше овочів та фруктів.",
    "Проводьте час на свіжому повітрі."
  ];

  function updatePillStock() {
    countOfPills.textContent = "💊".repeat(pillStock); // Display pill icons
  }

  btnBuyPills.addEventListener("click", () => {
    pillStock = 5;
    updatePillStock();
  });

  btnHealthWishes.addEventListener("click", () => {
    if (pillStock > 0) {
      pillStock--;
      const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
      pHealthWishes.textContent = randomAdvice;
    } else {
      pHealthWishes.textContent = "Немає пігулок! Купіть ще.";
    }
    updatePillStock();
  });

  // Initialize pill stock display
  updatePillStock();

  const vitaminsContainer = document.getElementById("p-vitamins");

  async function fetchVitamins() {
    try {
      const response = await fetch("data/vitamins.json");
      const vitamins = await response.json();
      renderVitamins(vitamins);
    } catch (error) {
      console.error("Error fetching vitamins data:", error);
    }
  }

  function renderVitamins(vitamins) {
    vitaminsContainer.innerHTML = vitamins
      .map(
        (vitamin) => `
        <div class="vitamin">
          <p>ID: ${vitamin.id}</p>
          <h3>${vitamin.name}</h3>
          <div class="vitamin-details">
            <img src="${vitamin.image}" alt="${vitamin.name}">
            <p>${vitamin.description}</p>
            <div>
              <img src="${vitamin.structure}" alt="Схема будови ${vitamin.name}">
            </div>
            <p class="rating">Рейтинг: ${"❤️".repeat(vitamin.rating)}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Fetch and render vitamins
  fetch("data/vitamins.json")
    .then((response) => response.json())
    .then((vitamins) => renderVitamins(vitamins))
    .catch((error) => console.error("Error fetching vitamins data:", error));

  document.getElementById("p-vitamins").addEventListener("click", (event) => {
    const vitaminCard = event.target.closest(".vitamin");
    if (vitaminCard) {
      const details = vitaminCard.querySelector(".vitamin-details");
      if (details) {
        details.classList.toggle("active");
        vitaminCard.style.backgroundColor = details.classList.contains("active") ? "#ffffff" : "#000000";
        vitaminCard.style.color = details.classList.contains("active") ? "#000000" : "#ffffff";
      }
    }
  });
});
