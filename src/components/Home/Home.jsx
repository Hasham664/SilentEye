import React from 'react'
import Navbar from '../Navbar/Navbar'
import DeviceControll from '../DeviceControll/DeviceControll'
import Hero from '../Hero/Hero'
import FeaturesSlider from '../FeaturesSlider/FeaturesSlider'
import Icons from '../Icons/Icons'
import Platform from '../Platform/Platform'
import Award from '../Award/Award'
import Sliders from '../Sliders/Sliders'
import TryNow from '../TryNow/TryNow'
import WorksIcon from '../WorksIcon/WorksIcon'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesSlider />
      <DeviceControll />
      <Icons />
      <Platform />
      <Award />
      <Sliders />
      <TryNow />
      <WorksIcon />
    </div>
  );
}

export default Home