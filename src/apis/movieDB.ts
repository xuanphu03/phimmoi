export const API_KEY = '2468dbfe7db31e3e246a10ab37dcfeeb'
export const API_URL = `https://api.themoviedb.org/3/movie`
export const API_IMG = 'https://image.tmdb.org/t/p/original/'

interface Props {
  type: string
  page: number
}

const getMovieList = (type, page = 1) =>
  `${API_URL}/${type}?api_key=${API_KEY}&page=${page}`

export async function fetchMovie({ type, page }: Props) {
  const res = await fetch(getMovieList(type, page))
  const data = await res.json()
  return data.results
}
