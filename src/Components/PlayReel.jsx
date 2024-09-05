import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import gsap, { ScrollTrigger } from 'gsap/all';
import { Power4 } from 'gsap';

function PlayReel() {
 
   const parent = useRef(null);
   const videodiv = useRef(null);
   const play = useRef(null);
   const reel = useRef(null);
   useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    var tl = gsap.timeline({
      
        scrollTrigger: {
          trigger: parent.current,
          top: "0 0",
          scrub: 1,
          pin: true
        }
    })
    tl.to(videodiv.current, {
  
      width: "105%",
      height: "105%",
      ease: Power4.easeInOut
      
     }, 'a')
       .to(play.current, {
        x: "-200%",
        ease: Power4
        
       }, 'a')
       .to(reel.current, {
        x: "200%",
        ease: Power4
        
       }, 'a')

   })
  return (
    <div ref={parent} className='w-full h-[100vh] overflow-hidden relative text-white'>
        <div ref={videodiv} className='w-40 sm:w-96 overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
             <video autoPlay loop muted className='w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="src/assets/video.mp4"></video>
        </div>
        <div className='overlay w-full h-full bg-black flex flex-col justify-between py-20 '>
            <div className='w-full text-center flex items-center justify-center'>
            <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
            <h2 className=' text-xl tracking-tighter leading-none font-extralight' >Work in motion</h2>
            
            
            </div>
            <h1 className='w-full justify-center flex items-center gap-32 sm:gap-96'>
                <div ref={play}  className='text-4xl font-light sm:text-8xl'>Play</div>
                <div ref={reel} className='text-4xl font-light sm:text-8xl '>Reel</div>
            </h1>
            <p className='text-center px-20 opacity-30 '>Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
        </div>
    </div>
  )
}

export default PlayReel