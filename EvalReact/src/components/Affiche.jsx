import API from "./api.js"

let apiMovie = new API()

const params = new URLSearchParams(location.search)
let movie_id = params.get("movie_id")
apiMovie.loadMovieById(movie_id)
