import { getFilmes, getGeneros } from "./filmesAPI.js";

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const mapaGeneros = await getGeneros();
    const data = await getFilmes();
    mostrarFilmes(data.results, mapaGeneros);
  } catch (err) {
    console.error("Erro ao carregar os filmes: ", err);
  }
});

function mostrarFilmes(filmes, mapaGeneros) {
  let movies = document.getElementById("movies");
  movies.innerHTML = filmes
    .slice(0, 10)
    .map((filme) => {
      const generos = filme.genre_ids.map((id) => mapaGeneros[id]).join(", ");
      return `
    <div class="movie">
      <img src="https://image.tmdb.org/t/p/w300${filme.poster_path}" alt="${filme.title}">
      <details>
        <summary>Saiba mais</summary>       
        <div class="info-dropdown">
          <p><strong>${filme.title}</strong></p>
          <p>🎭 Gênero: ${generos}</p>
          <p>⭐ Nota: ${filme.vote_average}</p>
          <p>📅 Lançamento: ${filme.release_date}</p>
          <p>➤ ${filme.overview}</p>
        </div>
      </details>
    </div>`;}).join("");
}
