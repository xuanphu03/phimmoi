import { API_KEY, API_URL } from '@/apis/movieDB'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Movie() {
  const [movie, setMovie] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`${API_URL}/${id}?api_key=${API_KEY}`)
      const movie = await response.json()
      setMovie(movie)
    }
    fetchMovie()
  }, [id])

  return (
    <div className="shadow-xl p-2 cursor-pointer">
      <h2>{movie?.title}</h2>
      {/* <img src={movie?.image} className="w-full" /> */}
      <p className="text-blue-500">${movie?.overview}</p>
      <p>{movie?.tagline}</p>
    </div>
  )
}
