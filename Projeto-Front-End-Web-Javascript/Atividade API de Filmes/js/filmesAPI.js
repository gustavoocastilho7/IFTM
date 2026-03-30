const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWY4ZWIwMjdhYjA1OWY3OWQ5NGQ1ZDY4NTkyZjQxNCIsIm5iZiI6MTc3NDgyMjk3OC41ODgsInN1YiI6IjY5YzlhNjQyNjRlODY4NTQ4OTgzOTMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJ7as0UxaayAuxKoo7Ic6v96Bt4r2c_tD2cUk3Ny_lE",
  },
};

export async function getFilmes() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Erro ao buscar os filmes:", err);  
  }
}


export async function getGeneros() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=pt-BR`, options);
    const data = await response.json();
    
    const mapaGeneros = {};
    data.genres.forEach(genero => {
      mapaGeneros[genero.id] = genero.name;
    });
    return mapaGeneros;
  } catch (err) {
    console.error("Erro ao buscar os gêneros:", err);
  }
}