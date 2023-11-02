import { API_IMG, fetchMovie } from '@/apis/movieDB'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Trending() {
  const [listMovie, setListMovie] = useState([])

  useEffect(() => {
    const getPoster = async () => {
      const data = await fetchMovie({ type: 'popular', page: 2 })
      setListMovie(data)
    }
    getPoster()
  }, [])
  return (
    <div className="px-40 mt-10 space-y-5">
      <h1 className="text-4xl font-bold text-primary">Popular</h1>
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
                <div className="h-5/6 flex justify-center">
                  <img src={`${API_IMG}/${urlImage}`} alt={movie.title} />
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
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
