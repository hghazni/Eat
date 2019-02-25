import React from 'react'
import './home.scss';
import Buttons from '../../components/Home/Buttons';
import HeroLogo from '../../components/Home/HeroLogo';

export const Home: React.SFC = () => { 
  var msgArr = new Array();

  msgArr[0] = "Hungry?";
  msgArr[1] = "Famished?";
  msgArr[2] = "You a starvin marvin?";

  const message = msgArr[Math.floor(Math.random()*msgArr.length)];

  return (
    <div>
    <HeroLogo />
    <Buttons />
    </div>
  )
};

export default Home;