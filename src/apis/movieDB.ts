const API_KEY = '2468dbfe7db31e3e246a10ab37dcfeeb'
const API_URL = `https://api.themoviedb.org/3/movie`
// const API_IMG = 'https://image.tmdb.org/t/p/original/'

const getMovieList = (type, page = 1) =>
  `${API_URL}/${type}?api_key=${API_KEY}&page=${page}`

export async function fetchImages() {
  const res = await fetch(getMovieList('popular'))
  const data = await res.json()
  return data.results
}
