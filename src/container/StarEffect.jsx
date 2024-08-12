import React from 'react'

const StarEffect = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star w-1 h-1 bg-white rounded-full absolute"
            style={{
              '--random-x': Math.random(),
              '--random-y': Math.random(),
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default StarEffect