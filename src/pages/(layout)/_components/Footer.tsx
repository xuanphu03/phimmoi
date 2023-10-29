import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row h-134 bg-secondary">
        <img
          src=""
          alt="Plane"
          className="flex items-center justify-center md:mr-20"
        />
        <div className="flex flex-col items-center justify-center mx-6 md:items-start md:mx-0">
          <h1 className="text-2xl font-bold leading-10 sm:text-4xl">
            Subscribe to newsletter
          </h1>
          <p className="mb-4 text-sm leading-9 sm:text-xl w-96 md:w-125">
            Get the latest news and interesting offers and real estate
          </p>
          <div className="flex w-2/3 gap-4">
            <Input
              className="pl-2"
              type="email"
              placeholder="Your e-mail address"
            />
            <Button
              type="button"
              className="bg-transparent border-2 text-primary border-primary hover:border-primary/0 hover:text-white"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 max-w-full bg-primary">
        <img src="" alt="" />
      </div>
    </footer>
  )
}

export default Footer
