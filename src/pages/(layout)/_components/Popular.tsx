import { API_IMG, fetchMovie } from '@/apis/movieDB'
import { useEffect, useState } from 'react'
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
        spaceBetween={40}
        slidesPerView={'auto'}
        className="overflow-hidden"
      >
        {listMovie.map(movie => {
          const urlImage = movie.poster_path
          return (
            <SwiperSlide key={movie.id} className="w-52 shadow-2xl">
              <img src={`${API_IMG}/${urlImage}`} alt={movie.title} />
              <div className="mt-5 flex flex-col h-20 justify-between">
                <h1 className="font-medium text-lg">{movie.title}</h1>
                <p>{new Date(movie.release_date).getFullYear()}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
