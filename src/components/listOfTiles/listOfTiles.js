import React from 'react'
import Link from 'gatsby-link'

const ListOfTiles = ({ data }) => {
    console.log(data.items.collection);
    var items = data.items.collection.map(function(item, key) {
        return (
            <div className="col-12 col-lg-4 mb-15" key={key}>
                <div className="card p-60 p-lg-100 ph-30">
                    <h2 className="mb-20">{item.title}</h2>
                    <p className="mb-40">{item.content}</p>
                </div>
            </div>
        );
      });
    return (
        <section className="contents text-center pt-60 pt-lg-100 pb-45 pb-sm-60 pb-lg-100 section-dark" id="contents-8">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="mb-40 mb-lg-60">{data.title}</h1>
                    </div>
                </div>
                <div className="row">
                    {items}
                </div>
            </div>
        </section>
    )
}

export default ListOfTiles