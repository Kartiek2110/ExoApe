import { motion, stagger } from "framer-motion";
import React from "react";

function Landing() {

  return (
    <div className="relative w-full h-[150vh] sm:h-[250vh]">
      <div  className="picture w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="absolute top-0 w-full ">
        <div className=" text h-full max-w-screen-2xl mx-auto px-5 sm:px-10 text-white">
          <div className="para mt-72 sm:mt-[35rem]">
            {[
              "Global digital design studio partnering with",
              "brands and businesses that create exceptional",
              "experiences where people live, work, and unwind.",
              "experiences where people.",
            ].map((items, index)=>{
              return <p className="text-md sm:text-2xl overflow-hidden">
              <motion.span
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ ease: [0.87, 0, 0.13, 1], duration: 1.2, delay: index*0.4 }}
                className="inline-block origin-left "
              >
                {items}
              </motion.span>
            </p>
            })}
          
          </div>
          <div className="heading mt-5 sm:m-10 overflow-hidden">
            {["Design","Digital", "Experience"].map((item, index)=>{
              return <h1 className="text-6xl sm:text-9xl  tracking-tighter leading-none">
                 <motion.span
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ ease: [0.87, 0, 0.13, 1], duration: 1.2, delay: index*0.4 }}
                className="inline-block origin-left "
              >
                {item}
              </motion.span>
            </h1>
            })}

          </div>
          <div className=" sm:w-1/3 para2 mt-20">
            <p className="sm:text-xl">
              We help experience-driven companies thrive <br /> by making their
              audience feel the refined <br /> intricacies of their brand and
              product in the <br />
              digital space. Unforgettable journeys start <br /> with a click.
            </p>
          </div>
          <a
            className=" sm:text-xl border-b-[1px] border-zinc-100 pb-1 inline-block mt-4"
            href=""
          >
            The Studio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
