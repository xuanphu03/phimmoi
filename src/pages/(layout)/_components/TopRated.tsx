import { API_IMG, fetchMovie } from '@/apis/movieDB'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Trending() {
  const [listMovie, setListMovie] = useState([])

  useEffect(() => {
    const getPoster = async () => {
      const data = await fetchMovie({ type: 'top_rated', page: 1 })
      setListMovie(data)
    }
    getPoster()
  }, [])
  return (
    <div className="px-40 mt-10 space-y-5">
      <h1 className="text-4xl font-bold text-primary">Top rated movies</h1>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        className="overflow-hidden"
      >
        {listMovie.map(movie => {
          const urlImage = movie.poster_path
          return (
            <SwiperSlide
              key={movie.id}
              className="w-72 p-2 pb-5 bg-white rounded-md shadow-sm"
            >
              <Link to={`/movies/${movie.id}`}>
                <img src={`${API_IMG}/${urlImage}`} alt={movie.title} />
                <div className="mt-5 flex flex-col h-20 justify-between">
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
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
