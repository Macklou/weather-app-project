document.addEventListener("DOMContentLoaded", function () {
  let cities = [
    {
      name: "Belfast",
      country: "UK",
      language: "English",
      temperature: 10,
      capitalCity: true,
    },
    {
      name: "Sydney",
      country: "Australia",
      language: "English",
      temperature: 25,
      capitalCity: false,
    },
    {
      name: "Paris",
      country: "France",
      language: "French",
      temperature: 18,
      capitalCity: true,
    },
    {
      name: "Berlin",
      country: "Germany",
      language: "German",
      temperature: 15,
      capitalCity: true,
    },
  ];

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const searchInput = document.querySelector('input[type="search"]');
    const cityName = searchInput.value.trim().toLowerCase();

    const foundCity = cities.find(
      (city) => city.name.toLowerCase() === cityName
    );

    if (foundCity) {
      console.log("Found City:", foundCity.name);

      document.querySelectorAll(".current-weather").forEach((city) => {
        city.style.display = "none";
      });

      const selectedCity = document.getElementById(
        foundCity.name.toLowerCase()
      );
      selectedCity.style.display = "flex";

      const backgroundImage = document.querySelector(".background-image");
      const imagePath = `${foundCity.name.toLowerCase()}-background.jpeg`;
      console.log("Image Path:", imagePath);
      backgroundImage.style.backgroundImage = `url(${imagePath})`;
      console.log(
        "Background Image Set:",
        backgroundImage.style.backgroundImage
      );

      document.querySelector(".current-city").innerText = foundCity.name;
    } else {
      console.log("City not found. Please search on Google.");
      alert("City not found. Please search on Google.");
    }
  });
});
