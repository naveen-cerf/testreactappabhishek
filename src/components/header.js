import React from "react";
import logo from "../assets/Logo_final_blue.png";
import { Link } from "react-router-dom";

function Header({ headerClass }) {
  return (
    <header className={`home-header  pr aft navbar-light`}>
      <div className='header-bar brd-b1 pr zi1'>
        <div className='app-bar container v-center jcsb h80'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='logo-abhisheka' />
            </Link>
          </div>
          <nav className='navbar flx1 df'>
            <ul className='nav-items fs14 fw6 v-center jcse w100'>
              <li className='nav-item'>
                <Link to='services' className='fc1'>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='experties' className='fc1'>
                  Experties
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='success-stories' className='fc1'>
                  Success Stories
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='company' className='fc1'>
                  Company
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='blogs' className='fc1'>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className='navbar-contact contact-btn md-btn bg4 fs14 fw5 box-center h48 br4 ttu ls1'>
            <Link to='/contact-us' className='fc1'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
