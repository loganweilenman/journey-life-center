import React from 'react'
import Link from 'gatsby-link'

const Header = ({ section }) => (
  <section className="headers bg-light pb-60 pb-sm-80 pb-lg-240" id="headers-5">
  <div className="ph-15 ph-sm-30 ph-lg-70 p-40 mb-30 mb-lg-150">
    <div className="row justify-content-between align-items-center">
      <div className="col-2 col-sm-4">
        {/* <nav className="d-lg-none">
          <div className="dropdown"><span id="headers-dropdown" data-toggle="dropdown"><img src="img/icons/burger.svg"/></span>
            <div className="dropdown-menu" aria-labelledby="headers-dropdown"><a href="">Submenu one</a><a href="">Submenu two</a><a href="">Submenu three</a>
              <div className="dropdown-divider"></div><a href="">Submenu four</a>
            </div>
          </div>
        </nav>
        <nav className="navbar d-none d-lg-block"><a href="">Menu one</a><a href="">Menu two</a><a href="">Menu three</a> 
        </nav>*/}
      </div>
      <div className="col-auto"><a href=""><img src="img/logos/logo.svg"/></a>
      </div>
      <div className="col-2 col-sm-4 text-right d-none d-sm-block">
        {/* <nav className="navbar text-right"><a href="">Link</a><a className="btn btn-small">Button</a>
        </nav> */}
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-12 col-sm-10 col-lg-8">
        <h1 className="mb-40">Wireframe connects the underlying conceptual structure</h1>
        <button className="btn"><span className="glyphicon icon-20 glyphicon-star"></span><span>Button with icon</span>
        </button>
      </div>
    </div>
  </div>
</section>
)

export default Header
