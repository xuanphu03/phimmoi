import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const Drawer = ({ children, open, onClose }: Props) => {
  return (
    <>
      <div
        className={clsx('fixed h-screen w-screen bg-black/70 z-10 inset-0', {
          hidden: !open
        })}
        onClick={onClose}
      />

      <ul
        className={clsx(
          'h-screen fixed pt-5 bg-white/90 w-80 z-50 inset-0 transition-transform text-black',
          {
            'translate-x-0': open,
            '-translate-x-full': !open
          }
        )}
      >
        {children}
      </ul>
    </>
  )
}

export default Drawer
