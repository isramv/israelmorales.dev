import React from "react"
import "./../../static/icons/brands.svg"
import { useStaticQuery, graphql } from "gatsby"

export default function Links(props) {
  const result = useStaticQuery(graphql`
    query MyQuery {
      allResumeYaml {
        nodes {
          resume {
            links {
              collection {
                url
                title
                logo
                description
              }
              title
            }
          }
        }
      }
    }
  `)

  const links = result.allResumeYaml.nodes[0].resume.links.collection
  const linksRender = links.map((item, index) => {
    const keyString = `links-${index}`
    return (
      <li key={keyString}>
        <a href={item.url}>
          {item.description} {item.title}
        </a>
      </li>
    )
  })

  return (
    <div className="my-4 px-4 md:px-0">
      <div className="container mx-auto">
        <ul>{linksRender}</ul>
      </div>
    </div>
  )
}
