import { VariantProps, cva } from 'class-variance-authority'
import { X } from 'lucide-react'

const avatar = cva('img', {
  compoundVariants: [{ className: ['rounded-full', 'object-cover'] }],
  defaultVariants: {
    size: 'small'
  },
  variants: {
    size: {
      small: ['w-10', 'h-10'],
      medium: ['w-24', 'h-24']
    }
  }
})

export interface AvatarProps
  extends React.ImgHTMLAttributes<Element>,
    VariantProps<typeof avatar> {
  url: string
  onRemove?: () => void
}

export const Avatar = ({ size, url, onRemove, className }: AvatarProps) => {
  return (
    <div className="relative w-fit">
      <img alt="avatar" className={avatar({ size, className })} src={url} />
      {onRemove && (
        <div
          className="bg-red-500 cursor-pointer  absolute top-0 right-2 w-5 h-5 rounded-full text-white"
          onClick={onRemove}
          html-role="button"
        >
          <X className="w-5 h-5" />
        </div>
      )}
    </div>
  )
}
