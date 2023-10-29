import { fetchImages } from '@/apis/movieDB'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

const data = await fetchImages()

export default function Banner() {
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const random = Math.floor(Math.random() * 20)
      setIndex(random)
      setIsLoading(true)
    }
  }, [isLoading])
  const urlImage = data[index].backdrop_path

  console.log(index)

  return (
    <section className="relative pt-60 pb-40">
      <div className="absolute top-0 overflow-hidden h-full -z-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${urlImage}`}
          alt="Banner movie"
        />
      </div>
      <div className="pl-40 text-white">
        <h1 className="text-5xl font-bold">Welcome.</h1>
        <p className="text-lg">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="flex w-1/3 pt-5">
          <Input placeholder="What do you want to watch?" />
          <Button>
            <Search />
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}
