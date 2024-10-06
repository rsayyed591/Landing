import React, { useEffect, useState } from 'react'

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      setCount(Math.floor(end * percentage))
      if (percentage < 1) {
        requestAnimationFrame(animateCount)
      }
    }
    requestAnimationFrame(animateCount)
  }, [end, duration])

  return <span>{count}</span>
}

export default AnimatedCounter