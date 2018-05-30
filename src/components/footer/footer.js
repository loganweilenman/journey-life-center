import React from 'react'
import Link from 'gatsby-link'
import fbLogo from "../../assets/img/socials/facebook.svg"

const Footer = ({ data }) => (
    <section className="footers text-center text-sm-left" id="footers-11">
  <div className="p-40 ph-15 ph-sm-30 ph-lg-70">
    <div className="row justify-content-between align-items-center">
      <div className="col-12 col-lg-auto mb-20 mb-lg-0">
        <div className="row justify-content-center align-items-center">
          <div className="col-auto mb-20 mb-sm-0">
            <div className="navbar-header"><a href=""><img src="img/logos/logo.svg" alt=""/></a></div>
          </div>
          <div className="col-auto">
            <p>&copy; 2018 Journey Life Family and Worship Center</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-auto">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-auto mb-20 mb-sm-0">
            <p>{data.address.street} {data.address.city}, {data.address.state} {data.address.zip}</p>
          </div>
          <div className="col-auto">
            <div className="socials"><a href={data.socialMedia.facebook} target="_blank"><img src={fbLogo}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)

export default Footer
