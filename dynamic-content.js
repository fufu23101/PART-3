document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ dynamic-content.js has loaded");

  const sneakerData = [
    { name: "Jordan 4", price: "R2,000", image: "images/1.jpg 23.jpg" },
    { name: "Jordan 5", price: "R6,000", image: "images/air-jordan-5-midnight-navy-men-s-sneakers-jordan-svrn-chicago-30497257259081.webp 23.webp" },
    { name: "Jordan 3", price: "R2,000", image: "images/jdau_product_list.webp 23.webp" },
    { name: "Jordan 4 ", price: "R3,000", image: "images/CT8527-016-MAIN.jpg 23.jpg" },
    { name: "Jordan 3 OG", price: "R2,300", image: "images/1691699308-image.avif 23.avif" },
    { name: "Jordan 4 Retro", price: "R6,000", image: "images/17769607_40246608_600.webp 23.webp" }
  ];

  const searchInput = document.getElementById("search-input");
  const sneakerList = document.getElementById("sneaker-list");

  console.log("🔎 searchInput:", searchInput);
  console.log("🔎 sneakerList:", sneakerList);

  function renderSneakers(sneakers) {
    sneakerList.innerHTML = "";
    console.log("🎨 Rendering sneakers:", sneakers);

    sneakers.forEach(sneaker => {
      const card = document.createElement("div");
      card.classList.add("sneaker-card");
      card.innerHTML = `
        <img src="${sneaker.image}" alt="${sneaker.name}">
        <h3>${sneaker.name}</h3>
        <p>${sneaker.price}</p>
      `;
      sneakerList.appendChild(card);
    });

    if (sneakers.length === 0) {
      sneakerList.innerHTML = "<p>No sneakers found.</p>";
    }
  }

  if (searchInput && sneakerList) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filtered = sneakerData.filter(sneaker =>
        sneaker.name.toLowerCase().includes(query)
      );
      renderSneakers(filtered);
    });

    renderSneakers(sneakerData); // Initial render
  } else {
    console.warn("❌ searchInput or sneakerList not found in the DOM");
  }
});
