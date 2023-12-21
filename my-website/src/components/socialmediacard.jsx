import React, { useRef, useEffect } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

function SocialMediaCard(str) {
  const [{x, y}, api] = useSpring(() => ({ x : 0, y : 0, }))
  const bindDrag = useDrag(({offset}) => {
    api({
      x:offset[0],
      y:offset[1],
    })
  })
  return (
      <div className="flex items-center justify-center h-screen"> 
      <animated.div style={{x, y}} {...bindDrag()} >
        <Square/>
      </animated.div>
      </div>
  );
}

function Square(){
  return (
    <div className="bg-night border-caribbean-green h-12 w-12 cursor-grab shadow-2xl p-2xl transition-shadow rounded-md">
    </div>
  );
}

export default SocialMediaCard;
