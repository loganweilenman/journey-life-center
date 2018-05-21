require("dotenv").config({
  path: `.dotenv`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        // spaceId: 'tgcr6p4xjoln',
        // accessToken: 'eb608f5ee56fd2b0baacf2ed950dd12d84697c8f873b3da37868959547398cdd',
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_DELIVERY_API_TOKEN}`
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark'
  ]
}
