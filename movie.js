const API_KEY = "e6865c18";
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
const detailsDiv = document.getElementById("movie-details");

fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}&plot=full`)
  .then(res => res.json())
  .then(data => {
    detailsDiv.innerHTML = `
      <h1>${data.Title}</h1>
      <img src="${data.Poster}" width="200"/>
      <p><strong>Genre :</strong> ${data.Genre}</p>
      <p><strong>Acteurs :</strong> ${data.Actors}</p>
      <p><strong>Résumé :</strong> ${data.Plot}</p>
      <p><strong>Note :</strong> ${data.imdbRating}</p>
      <p><strong>Date de sortie DVD :</strong> ${formatDate(data.DVD)}</p>
    `;
  });

function formatDate(dateStr) {
  if (!dateStr) return "Non disponible";
  const parts = dateStr.split(" ");
  const months = {
    Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
    Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
  };
  return `${parts[0].padStart(2, '0')}/${months[parts[1]]}/${parts[2]}`;
}
