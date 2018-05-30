import React from 'react'
import Link from 'gatsby-link'

const Contact = ({ data }) => (
    <section className="contacts text-center" id="contacts-9">
        <div className="container">
            <div className="row justify-content-center p-60 p-lg-100">
            <div className="col-12 col-sm-10 col-lg-6">
                <h1 className="mb-20">Contact us</h1>
                <h4 className="mb-20">
                    {data.address.street}<br/>
                    {data.address.city}, {data.address.state} {data.address.zip}<br/>
                    {data.address.phone}
                </h4>
            </div>
            </div>
        </div>
        <div className="h-300 bg-full-map">
            <iframe src="https://snazzymaps.com/embed/74094" width="100%" height="100%" style={{ border: 'none'}}></iframe>
        </div>
    </section>
)

export default Contact
