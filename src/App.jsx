import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import LocomotiveScroll from 'locomotive-scroll';
import Work from './Components/Work';
import PlayReel from './Components/PlayReel';
import Images from './Components/Images';
import Spread from './Components/Spread';
import Last from './Components/Last';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full font-["TWK_Lausane"] '>
      <Navbar/>
      <Landing/>
      <Work/>
      <PlayReel/>
      <Images/>
      <Spread/>
      <Last/>
    </div>
  )
}

export default App