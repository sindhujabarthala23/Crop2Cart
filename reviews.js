// Example reviews
const reviews = [
  { user: "Anjali", comment: "Fresh and tasty vegetables, loved it!" },
  { user: "Ravi", comment: "Affordable prices and great quality." },
  { user: "Meena", comment: "Directly from farmers, I trust this site!" }
];

// Load reviews into the page
const reviewContainer = document.getElementById("reviews");
reviews.forEach(r => {
  const card = document.createElement("div");
  card.className = "review-card";
  card.innerHTML = `
    <h4>${r.user}</h4>
    <p>"${r.comment}"</p>
  `;
  reviewContainer.appendChild(card);
});
