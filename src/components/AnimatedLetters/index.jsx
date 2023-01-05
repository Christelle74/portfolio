import React from 'react'
import './animatedLetters.scss'

const AnimatedLetters=({letterClass, strArray, index}) => {
  return (
    <span>
        {strArray.map((element, idx)=>(
            <span key={element + idx} className={`${letterClass} _${idx + index}`}>
                {element}
            </span>
        ))}
    </span>
  )
}
export default AnimatedLetters