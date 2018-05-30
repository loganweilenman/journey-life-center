import React from 'react'
import Link from 'gatsby-link'
import burgerIcon from '../../assets/img/icons/burger.svg';

const Header = ({ data }) => (
  <section className="headers bg-light pb-60 pb-sm-80 pb-lg-240 section-dark" id="headers-5">
  <div className="ph-15 ph-sm-30 ph-lg-70 p-40 mb-30 mb-lg-150">
    <div className="row justify-content-between align-items-center">
      <div className="col-2 col-sm-4">
      <nav className="d-lg-none">
          <div className="dropdown"><span id="headers-dropdown" data-toggle="dropdown"><img src={burgerIcon}/></span>
            <div className="dropdown-menu" aria-labelledby="headers-dropdown"><a href="">Submenu one</a><a href="">Submenu two</a><a href="">Submenu three</a>
              <div className="dropdown-divider"></div><a href="">Submenu four</a>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-auto site-title">
          <img src={data.image.file.url} className="logo"/> <span>Journey Life</span> Family and Worship Center
        </div>
      <div className="col-2 col-sm-4 text-right d-none d-sm-block">
        <nav className="navbar text-right"><a href="">Home</a><a className="btn btn-small">Give</a>
        </nav>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-12 col-sm-10 col-lg-9">
        <h1 className="mb-40 tagline">To seek and save those who are lost and empower the believer to walk in the grace that they have.</h1>
        <div className="row justify-content-center text-center service-times">
          <div className="col-4">
            <h2 className="mb-40">Sunday</h2>
            <h1 className="mb-40">10:30 AM</h1>
          </div>
          <div className="col-4">
            <h2 className="mb-40">Wednesday</h2>
            <h1 className="mb-40">6:30 PM</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)

export default Header
