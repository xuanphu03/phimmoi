import { forwardRef } from 'react'
import { Button } from './Button'
import { Loader, Upload } from 'lucide-react'

type UploadButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isLoading?: boolean
}

const UploadButton = (
  { isLoading, ...props }: UploadButtonProps,
  ref: React.LegacyRef<HTMLInputElement>
): JSX.Element => {
  return (
    <div className="overflow-hidden relative">
      <Button
        variant="outline"
        disabled={isLoading}
        className="w-full inline-flex items-center"
        type="button"
      >
        {isLoading ? <Loader /> : <Upload />}
        <span className="ml-2">Upload</span>
      </Button>
      <input
        className="cursor-pointer absolute block top-0 h-full w-full opacity-0 pin-r pin-t"
        type="file"
        {...props}
        ref={ref}
      />
    </div>
  )
}

export default forwardRef(UploadButton)
