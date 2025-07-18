let coins = 0;
let doubleCoins = false;
let doubleCoinsCost = 100;

const coinsDisplay = document.getElementById("coins");
const farmBtn = document.getElementById("farmBtn");
const doubleCoinsBtn = document.getElementById("doubleCoinsBtn");
const doubleCoinsCostDisplay = document.getElementById("doubleCoinsCost");
const doubleCoinsStatus = document.getElementById("doubleCoinsStatus");
const farmsContainer = document.getElementById("farmsContainer");

const farmTypes = [
  {
    name: "Farma Kur 🐔",
    baseCost: 100,
    cps: 1,
    owned: 0,
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
  },
  {
    name: "Farma Krów 🐄",
    baseCost: 500,
    cps: 5,
    owned: 0,
    image: "https://cdn-icons-png.flaticon.com/512/1998/1998610.png"
  },
  {
    name: "Farma Słoni 🐘",
    baseCost: 2000,
    cps: 20,
    owned: 0,
    image: "https://cdn-icons-png.flaticon.com/512/616/6164087.png"
  },
  {
    name: "Farma Kosmiczna 👽",
    baseCost: 10000,
    cps: 100,
    owned: 0,
    image: "https://cdn-icons-png.flaticon.com/512/447/447037.png"
  }
];

function updateUI() {
  coinsDisplay.textContent = coins;
  doubleCoinsCostDisplay.textContent = doubleCoinsCost;
  doubleCoinsStatus.textContent = doubleCoins ? "Aktywne" : "Nieaktywne";
}

function renderFarms() {
  farmsContainer.innerHTML = "";
  farmTypes.forEach((farm, index) => {
    const farmCard = document.createElement("div");
    farmCard.className = "farm-card";
    const cost = Math.floor(farm.baseCost * Math.pow(1.5, farm.owned));

    farmCard.innerHTML = `
      <img src="${farm.image}" alt="${farm.name}" class="farm-img" />
      <h3>${farm.name}</h3>
      <p>Koszt: ${cost}</p>
      <p>Ilość: ${farm.owned}</p>
      <p>Produkcja: ${farm.cps * farm.owned} / sek</p>
      <button onclick="buyFarm(${index})">Kup</button>
    `;
    farmsContainer.appendChild(farmCard);
  });
}

function buyFarm(index) {
  const farm = farmTypes[index];
  const cost = Math.floor(farm.baseCost * Math.pow(1.5, farm.owned));
  if (coins >= cost) {
    coins -= cost;
    farm.owned++;
    updateUI();
    renderFarms();
  }
}

farmBtn.addEventListener("click", () => {
  coins += doubleCoins ? 2 : 1;
  updateUI();
});

doubleCoinsBtn.addEventListener("click", () => {
  if (!doubleCoins && coins >= doubleCoinsCost) {
    coins -= doubleCoinsCost;
    doubleCoins = true;
    updateUI();
  }
});

setInterval(() => {
  farmTypes.forEach(farm => {
    coins += farm.owned * farm.cps * (doubleCoins ? 2 : 1);
  });
  updateUI();
}, 1000);

updateUI();
renderFarms();