// Example products
const products = [
  { name: "Fresh Tomatoes", image: "photos/tomato.jpg", price: "₹40/kg" },
  { name: "Organic Spinach", image: "photos/spinach.jpg", price: "₹25/bundle" },
  { name: "Sweet Mangoes", image: "photos/mango.jpg", price: "₹80/kg" },
  { name: "Wheat Seeds", image: "photos/seeds.jpg", price: "₹120/kg" }
];

// Load products into the page
const productContainer = document.getElementById("products");
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Price: ${p.price}</p>
  `;
  productContainer.appendChild(card);
});
