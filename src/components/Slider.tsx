import clsx from 'clsx'
import { useState } from 'react'
import left from '../../assets/svgs/turn-left.svg'
import right from '../../assets/svgs/turn-right.svg'

interface Props {
  images: string[]
  className?: string
}

export default function Slider({ images, className }: Props) {
  const [current, setCurrent] = useState(0)
  return (
    <div className={className}>
      <ul className="lg:overflow-hidden lg:w-570 2xl:h-454 lg:h-96 lg:relative flex gap-3 overflow-x-auto snap-x">
        {images.map((image, index) => (
          <img
            src={image}
            key={image}
            className={clsx(
              'lg:transition-transform lg:duration-500 lg:absolute lg:top-0 lg:left-0 lg:h-full sm:w-570 w-room rounded-xl snap-center',
              {
                'lg:translate-x-0': index === current,
                'lg:-translate-x-full': index !== current
              }
            )}
          />
        ))}
      </ul>
      <div className="hidden lg:flex justify-between items-center mt-2">
        <div className="w-200 h-0.5 flex gap-1">
          {images.map((image, index) => (
            <div
              className={clsx('w-10 h-0.5 bg-white rounded-[10px]', {
                'bg-yellow-400': index === current
              })}
              key={image}
            ></div>
          ))}
        </div>

        <div className="flex gap-3">
          <img
            src={left}
            onClick={() => {
              setCurrent(current => {
                if (current === 0) return images.length - 1
                return current - 1
              })
            }}
            alt="left"
            className="cursor-pointer"
          />
          <img
            src={right}
            alt="right"
            onClick={() => {
              setCurrent(current => {
                if (current === images.length - 1) return 0
                return current + 1
              })
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
