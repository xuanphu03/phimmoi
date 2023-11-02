import { API_IMG, fetchMovie } from '@/apis/movieDB'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  const [movie, setMovie] = useState([])
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovie({ type: 'now_playing', page: 1 })
        setMovie(data)
        if (!isLoading) {
          const random = Math.floor(Math.random() * 20)
          setIndex(random)
          setIsLoading(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
  }, [])
  const urlImage = movie[index]?.backdrop_path

  return (
    <section className="relative pt-60 pb-40">
      <div className="absolute top-0 overflow-hidden h-full -z-10">
        <img src={`${API_IMG}/${urlImage}`} alt="Banner movie" />
      </div>
      <div className="pl-40 text-white">
        <h1 className="text-5xl font-bold">Welcome.</h1>
        <p className="text-lg">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="flex w-1/3 pt-5">
          <Input placeholder="What do you want to watch?" />
          <Button>
            <Link to={'/search'}>
              <Search />
              Search
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
