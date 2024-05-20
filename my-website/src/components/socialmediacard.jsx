import React, { useRef, useEffect } from 'react'
//import { useSpring, animated, to } from '@react-spring/web'
//import { useDrag } from 'react-use-gesture'
import GitHubImage from "../images/github.png"
import LinkedInImage from "../images/linkedin.png"
import StackImage from "../images/stack_overflow.png"

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
       <Square link={"https://github.com/jsingh2412"} source={GitHubImage} desc={"My Github Profile"}/>
       <Square link={"https://www.linkedin.com/in/jagroop-singh-289910184/"} source={LinkedInImage} desc={"My LinkedIn Profile"}/>
       {
       //<Square link={""} source={StackImage} desc={"My LinkedIn Profile"}/> 
       }
      </div>
  );
}
//images loading
function Square({link, source, desc}){
  return (
    <div className="bg-off-white border-spacing-1 h-12 w-12 cursor-pointer shadow-2xl p-2xl transition-shadow rounded-md">
      <a href={link} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
        <img className="w-full h-full object-cover" src={source} alt={desc} />
      </a>
    </div>
  );
}

export default SocialMediaCard;
