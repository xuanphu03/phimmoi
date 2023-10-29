import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Search } from 'lucide-react'

export default function SearchInOffers() {
  return (
    <div className="p-40 flex flex-col justify-center items-center">
      <div className="w-fit mb-10 flex">
        <Input icon={Search} placeholder="Enter a keyword" className="w-fit" />
        <Button className="w-fit">Search</Button>
      </div>
      <div className="grid grid-cols-3 gap-3"></div>
    </div>
  )
}
