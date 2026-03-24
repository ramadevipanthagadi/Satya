document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("hotels-container");
  const hotels = [
    { name: "Ocean View Hotel", location: "Goa", rating: 5 },
    { name: "Mountain Retreat", location: "Manali", rating: 4 },
    { name: "City Lights Inn", location: "Mumbai", rating: 3 }
  ];

  hotels.forEach(hotel => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${hotel.name}</h3><p>Location: ${hotel.location}</p><p>Rating: ${hotel.rating} ⭐</p>`;
    container.appendChild(div);
  });
});
