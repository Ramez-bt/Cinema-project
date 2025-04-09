const API_KEY = "e6865c18";
const input = document.getElementById("search-input");
const resultsDiv = document.getElementById("search-results");

input.addEventListener("input", () => {
  const query = input.value;
  if (query.length < 3) return;

  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      resultsDiv.innerHTML = "";
      if (data.Search) {
        data.Search.forEach(movie => {
          const div = document.createElement("div");
          div.innerHTML = `
            <h3>${movie.Title}</h3>
            <img src="${movie.Poster}" width="100"/>
            <p><a href="movie.html?id=${movie.imdbID}">En savoir plus</a></p>
          `;
          resultsDiv.appendChild(div);
        });
      }
    });
});
