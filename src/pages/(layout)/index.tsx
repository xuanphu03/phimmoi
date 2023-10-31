import Banner from './_components/Banner'
import Popular from './_components/Popular'
import Trending from './_components/Trending'

function Home() {
  return (
    <div>
      <Banner />
      <Trending />
      <Popular />
      <p>leaderboard</p>
    </div>
  )
}

export default Home
