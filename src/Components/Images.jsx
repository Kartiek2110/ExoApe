import { Power4 } from "gsap";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function Images() {
  ScrollTrigger;
  

  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const forth = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 0.5,
      },
    });
    tl.to(first.current, {
      x: "40%",
      ease: Power4
    }, 'a')
    .to(second.current, {
      x: "-40%",
      ease: Power4
    }, 'a')
    .to(third.current, {
      x: "-40%",
      ease: Power4
    }, 'a')
    .to(forth.current, {
      x: "20%",
      ease: Power4
    }, 'a')
  });
  return (
    <div
      ref={parent}
      className="w-full h-[70vh] sm:h-[100vh] bg-slate-300 flex items-center justify-center overflow-hidden"
    >
      <div className="w-[40%] sm:w-[20%] sm:h-[90%] h-1/2 relative ">
        <div
          ref={first}
          className="absolute w-20 sm:w-40 sm:h-[15rem] h-[5rem] -right-1/3 top-6 bg-slate-200 "
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={second} className="absolute w-[6rem] aspect-video -left-1/2 top-1/3 bg-red-400">
          <video
            autoPlay
            loop
            muted
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={third}
          className="absolute w-[7rem] aspect-video -left-[70%] -bottom-12 bg-gray-500"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={forth} className="absolute w-[11rem] aspect-video -right-[70%] -bottom-[38%]  ">
          <video
            autoPlay
            loop
            muted
            className="h-full w-full"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
