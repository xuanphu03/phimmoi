import { useSearchParams } from 'react-router-dom'

export function useSearchParamsState(
  searchParamName: string,
  defaultValue: string
): readonly [
  searchParamsState: string,
  setSearchParamsState: (newState: string) => void
] {
  const [searchParams, setSearchParams] = useSearchParams()

  const acquiredSearchParam = searchParams.get(searchParamName)
  const searchParamsState = acquiredSearchParam ?? defaultValue

  const setSearchParamsState = (newState: string) => {
    if (newState) {
      const next = Object.assign(
        {},
        [...searchParams.entries()].reduce(
          (o, [key, value]) => ({ ...o, [key]: value }),
          {}
        ),
        { [searchParamName]: newState }
      )
      setSearchParams(next)
    } else {
      setSearchParams(undefined)
    }
  }
  return [searchParamsState, setSearchParamsState]
}
