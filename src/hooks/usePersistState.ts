import { useState } from 'react'

export function usePersistState<T>(
  defaultValue: T
): readonly [state: T, setState: (newState: T) => void] {
  const [state, setState] = useState(() => {
    return defaultValue
  })

  return [state, setState]
}
