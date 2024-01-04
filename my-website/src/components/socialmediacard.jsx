import React, { useRef, useEffect } from 'react'
//import { useSpring, animated, to } from '@react-spring/web'
//import { useDrag } from 'react-use-gesture'

//still need to make the cards draggable(for fun)
function SocialMediaCard() {
  /*
  const [{x, y}, api] = useSpring(() => ({x : 0, y : 0,}))
  const bindDrag = useDrag(({offset}) => {
    api({
      x:offset[0],
      y:offset[1],
      config:{ mass: 5, tension: 350, friction: 30 },
    })
  })
  
  <animated.div style={{x, y}} {...bindDrag()} >
        <Square/>
      </animated.div>
  */
  return (
      <div className="flex items-center justify-center h-screen"> 
       <Square link={"https://github.com/jsingh2412"} source={"/images/github.png"} desc={"My Github Profile"}/>
       <Square link={"https://www.linkedin.com/in/jagroop-singh-289910184/"} source={"/images/linkedin.png"} desc={"My LinkedIn Profile"}/>
      </div>
  );
}
//images still not loading properly, need to check source being passed in
function Square({link, source, desc}){
  return (
    <div className="bg-off-white border-spacing-1 h-12 w-12 cursor-pointer shadow-2xl p-2xl transition-shadow rounded-md">
      <a href={link} className="w-full h-full block">
        <img className="w-full h-full object-cover" src={source} alt={desc} />
      </a>
    </div>
  );
}

export default SocialMediaCard;
