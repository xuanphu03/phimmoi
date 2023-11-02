import { API_IMG, fetchMovie } from '@/apis/movieDB'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MoviesList() {
  const [listMovie, setListMovie] = useState([])
  const [page, setPage] = useState(1)

  const handleClick = () => {
    setPage(page => page + 1)
  }

  useEffect(() => {
    const getPoster = async () => {
      const data = await fetchMovie({ type: 'popular', page: page })
      setListMovie(data)
    }
    getPoster()
  }, [])
  console.log(page)
  return (
    <div className="px-40 mt-10 space-y-5">
      <h1 className="text-4xl font-bold text-primary">Movies List</h1>
      <div className="grid grid-cols-5 gap-7">
        {listMovie.map(movie => {
          const urlImage = movie.poster_path
          return (
            <Link
              className="w-72 p-2 pb-5 bg-white rounded-md shadow-sm hover:scale-110 hover:opacity-80"
              to={`/movies/${movie.id}`}
              key={movie.id}
            >
              <div className="h-5/6 flex justify-center">
                <img
                  className=" rounded-md "
                  src={`${API_IMG}/${urlImage}`}
                  alt={movie.title}
                />
              </div>
              <div className="mt-5 h-20 flex flex-col justify-between">
                <h1 className="font-medium text-lg">
                  {movie.title}{' '}
                  <span className="text-sm italic">
                    ({new Date(movie.release_date).getFullYear()})
                  </span>
                </h1>
                <div className="flex justify-between text-sm">
                  <p>{Math.round(movie.vote_average * 100.0) / 10.0}/100</p>
                  <p>Vote: {movie.vote_count}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <div>
        <Button>Previous</Button>
        <Button onClick={handleClick}>Next</Button>
      </div>
    </div>
  )
}
