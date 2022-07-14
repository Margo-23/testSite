import React from 'react';
import logo from '../../../src/assets/images/Logo.svg';
import banner from '../../../src/assets/images/pexels-alexandr-podvalny-1227513.jpeg';

function Header() {
  return (
    <div className='header'>
            <div className="header__top">
              <div className='container'>
              <div className="header__wrapper">
            <div className="header__logo"><img className='header__logo-img' src={logo} alt='logo'></img></div>
            <div className="header__buttons">
                <a className='header__btn button' href='/'>Users</a>
                <a className='header__btn button' href='/'>Sign up</a>
            </div>
            </div>
              </div>
            </div>
              <div className='header__bottom'>
                <div className="container">
                <div className="header__content">
                <img className="header__banner" src={banner} alt="image"  />
                <div className='header__shadow'></div>
                <div className="header__info">
                <h1 className="header__title title">Test assignment for front-end developer</h1>
                <div className="header__text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</div>
                <a href='/' className='header__content-btn button' >Sign up</a>
                </div>

            </div>
                </div>
              </div>



    </div>
  )
}

export default Header