import React from 'react'
import Link from 'gatsby-link'

const Header = ({ data }) => (
  <section className="headers bg-light pb-60 pb-sm-80 pb-lg-240 section-dark" id="headers-5">
  <div className="ph-15 ph-sm-30 ph-lg-70 p-40 mb-30 mb-lg-150">
    <div className="row justify-content-between align-items-center">
        <div className="site-title">
          <img src={data.image.file.url} className="logo"/> <span>Journey Life</span> Family and Worship Center
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
