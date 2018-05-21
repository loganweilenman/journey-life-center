import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header/header'
import SectionWithImage from '../components/sectionWithImage/sectionWithImage'
import ListOfTiles from '../components/listOfTiles/listOfTiles'

const IndexPage = (props) => {
  console.log(props);
  var sections = props.data.contentfulPages.sections.map(function(section) {
    return (
      <div key={section.id}>
        {{
            ContentfulHeader : <Header data={section}/>,
            ContentfulSectionWithImage : <SectionWithImage data={section}/>,
            ContentfulListOfTiles : <ListOfTiles data={section}/>
        }[section.__typename]}
      </div>
    );
  });
    return (
      <div>
        {sections}
      </div>
      
    )
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
      contentfulPages {
        id
        sections{
          __typename
          ... on ContentfulHeader {
            id
            image {
              file {
                url
              }
            }
          }
          ... on ContentfulSectionWithImage {
            id
            title
            content {
              content
            }
            image {
              file {
                url
              }
            }
          }
          ... on ContentfulListOfTiles {
            id
            title
            items {
              collection {
                title
                content
              }
            }
          }
        }
      }
    }
`