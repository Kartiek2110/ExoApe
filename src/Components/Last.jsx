import React from "react";

function Last() {
  return (
    <div className="w-full  h-[80vh] bg-black mt-20">
      <div className="w-full h-96 p-5">
        <div className=" h-[22rem] flex items-center justify-between mt-20 ">
            <div className="w-[30%] p-5 mx-24 ">
                <h1 className="text-[10vw] leading-none tracking-tight text-[#E0CCBB] py-7">Our Story</h1>
                <p className="text-xl tracking-tight opacity-55 text-[#E0CCBB]">The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
            </div>
            <video autoPlay loop muted className="w-[60%] scale-[1] aspect-video" src="https://www.exoape.com/video/video-6.mp4"></video>
        </div>
      </div>
      
    </div>
  );
}

export default Last;
