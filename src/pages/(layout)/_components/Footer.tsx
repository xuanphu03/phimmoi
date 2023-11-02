import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-40 pb-20 flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-10">
        <Link to="https://facebook.com/">
          <Facebook />
        </Link>
        <Link to="https://www.instagram.com/">
          <Instagram />
        </Link>
        <Link to="https://twitter.com/">
          <Twitter />
        </Link>
        <Link to="https://youtube.com/">
          <Youtube />
        </Link>
      </div>
      <ul className="flex gap-6">
        <li>Conditions of Use</li>
        <li>Privacy & Policy</li>
        <li>Press Room</li>
      </ul>
      <p className="text-primary/70 text-xs">©2023 MovieBox by XunaFu</p>
    </footer>
  )
}

export default Footer
