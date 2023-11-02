import Banner from './_components/Banner'
import Popular from './_components/Popular'
import TopRated from './_components/TopRated'
import Trending from './_components/Trending'

function Home() {
  return (
    <div>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
