const API_KEY = "e6865c18";
const films = ["Damsel", "Shutter Island", "Now You See Me"]; // "Now You See Me" = "Insaisissables"

const container = document.getElementById("movies-container");

films.forEach(title => {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
    .then(res => res.json())
    .then(data => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h2>${data.Title}</h2>
        <img src="${data.Poster}" alt="${data.Title}" width="200"/>
        <p><a href="movie.html?id=${data.imdbID}">En savoir plus</a></p>
      `;
      container.appendChild(div);
    });
});
