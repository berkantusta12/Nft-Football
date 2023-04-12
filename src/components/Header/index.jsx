import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../config/icon/Fe.svg';
import { IoIosFootball } from 'react-icons/io';
import './index.css';

const Header = (props) => {
  const price = useSelector(state => state.headerParam);

  function handleGoToMycards() {
    if (props.goToMycards) {
      props.goToMycards();
    }
  }

  function handleGoToMarket() {
    if (props.goToMarket) {
      props.goToMarket();
    }
  }

  return (
    <div>
      <div className='header'>
        <div className='top gap-10'>
          <IoIosFootball />
          <img src={logo} alt='' />
        </div>

        <button className='myCards' onClick={handleGoToMycards}>MY CARDS</button>
        <button className='myCards' onClick={handleGoToMarket}>MARKET</button>
        <span className='btnCard'></span>
        <span className='price'>€ {price}</span>
      </div>
    </div>
  );
};

export { Header };