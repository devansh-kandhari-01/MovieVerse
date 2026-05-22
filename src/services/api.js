const API_KEY = "faceeea65b07c049b2afa8dd66b36440";
export async function getPopularMovies(){
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    let data = await response.json();
    return data.results;
}

export async function searchMovies(query){
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    let data = await response.json();
    return data.results;
}