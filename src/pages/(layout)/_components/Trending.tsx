import { API_IMG, fetchTrending } from '@/apis/movieDB'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Trending() {
  const [listMovie, setListMovie] = useState([])

  useEffect(() => {
    const getPoster = async () => {
      const data = await fetchTrending({ type: 'now_playing', page: 1 })
      setListMovie(data)
    }
    getPoster()
  }, [])
  return (
    <div className="px-40 mt-10 space-y-5">
      <h1 className="text-4xl font-bold text-primary">Trending</h1>
      <Swiper
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={'auto'}
        className="overflow-hidden"
      >
        {listMovie.map(movie => {
          const urlImage = movie.poster_path
          return (
            <SwiperSlide key={movie.id} className="w-48">
              <img src={`${API_IMG}/${urlImage}`} alt={movie.title} />
              <h1 className="font-medium">{movie.title}</h1>
              <p>{new Date(movie.release_date).getFullYear()}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
