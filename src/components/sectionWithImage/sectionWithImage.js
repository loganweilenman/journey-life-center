import React from 'react'
import Link from 'gatsby-link'

const SectionWithImage = ({ data }) => (
    <section className="contents text-center text-sm-left p-60 p-lg-100" id="contents-4">
        <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-12 col-sm-6 col-lg-6 mb-30 mb-sm-0"><img className="image pic-md" src={data.image.file.url} alt=""/>
            </div>
            <div className="col-12 col-sm-6 col-lg-5">
            <h1 className="mb-20">{data.title}</h1>
            <h4>
                {data.content.content}
            </h4>
            </div>
        </div>
        </div>
    </section>
)

export default SectionWithImage
