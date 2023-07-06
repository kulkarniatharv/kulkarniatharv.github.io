import { useState, useEffect } from 'react'

const useScrollTrigger = ({ threshold }) => {
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setTrigger(window.pageYOffset > threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return trigger
}

export default useScrollTrigger
