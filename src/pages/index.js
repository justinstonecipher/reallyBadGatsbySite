import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import style from "./index.module.scss"
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
  return (
    <div className={style.home}>
      <SEO title="JeffSmellsLikeToots" />
      <h1><marquee>Centeva Blog</marquee></h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>
            <marquee><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></marquee>
          </h2>
          <div className={style.image}>
            <Img fluid={node.frontmatter.avatar.childImageSharp.fluid} />
          </div>
          <p>{node.frontmatter.author}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            author
            path
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 250) {
                  aspectRatio
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
