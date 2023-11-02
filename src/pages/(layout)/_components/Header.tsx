import { Button } from '@/components/Button'
import logo from '@/assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import bugger from '@/assets/icon/hambeger.png'
import Drawer from '@/components/Drawer'

function Header() {
  const [isToggler, setIsToggler] = useState(false)

  const handleToggler = () => {
    setIsToggler(isToggler => !isToggler)
  }

  return (
    <div className="flex items-center justify-between shadow-md px-10">
      <div className="flex flex-auto">
        <Link to="/">
          <img src={logo} alt="logo" className="h-20" />
        </Link>
        <ul className="hidden md:gap-6 md:flex md:items-center">
          <Link to="/movies">
            <li className="border border-black px-3 rounded-full">Movies</li>
          </Link>
          <Link to="/search">
            <li className="border border-black px-3 rounded-full">TV Shows</li>
          </Link>
          <Link to="/#references">
            <li className="border border-black px-3 rounded-full">People</li>
          </Link>
          <Link to="/#about-us">
            <li className="border border-black px-3 rounded-full">More</li>
          </Link>
        </ul>
      </div>
      <Link to="/login">
        <Button> Login </Button>
      </Link>
      <img
        className="w-12 h-12 ml-6 mr-6 cursor-pointer md:hidden"
        onClick={handleToggler}
        src={bugger}
        alt="bugger"
      />
      <Drawer open={isToggler} onClose={handleToggler}>
        <div className="mx-5">
          <img src={logo} alt="logo" className="" />
        </div>
        <div className="flex flex-col gap-4 mx-5 text-xl my-7">
          <Link to="/">
            <li>Top offers</li>
          </Link>
          <Link to="/search">
            <li>Search in offers</li>
          </Link>
          <Link to="/#references">
            <li>References</li>
          </Link>
          <Link to="/#about-us">
            <li>About Us</li>
          </Link>
          <Link to="/#our-team">
            <li>Our Team</li>
          </Link>
        </div>
      </Drawer>
    </div>
  )
}

export default Header
