import React from 'react'

export function useMediaQuery(query: string) {
  const [isMatch, setMatch] = React.useState(window.matchMedia(query).matches)

  const handleChange = (e: MediaQueryListEvent | Event) =>
    setMatch((e as MediaQueryListEvent).matches)

  React.useEffect(() => {
    window.matchMedia(query).addEventListener('change', handleChange)

    return () => window.removeEventListener('change', handleChange)
  }, [])

  return isMatch
}
