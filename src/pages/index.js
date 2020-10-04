import React from "react"
import List from "./../components/List"
import Paragraph from "./../components/Paragraph"
import Welcome from "./../components/Welcome"
import { useStaticQuery, graphql } from "gatsby"

export default function Home() {
  const result = useStaticQuery(graphql`
    query MyQuery {
      allDataYaml {
        nodes {
          about {
            text
            title
            type
          }
          education {
            title
            collection {
              dates
              description
              title
            }
          }
          experience {
            collection {
              dates
              description
              duties
              jobTitle
            }
            title
          }
          frameworks {
            collection
            title
          }
          languages {
            collection
            title
          }
          other {
            collection
            title
          }
          links {
            title
            collection {
              description
              logo
              url
            }
          }
          programing {
            collection
            title
          }
        }
      }
    }
  `)

  const data = result.allDataYaml.nodes[0]

  console.log(data)

  return (
    <>
      <head>
        <div>
          <div></div>
        </div>
      </head>
      <body>
        <Welcome />
        <Paragraph data={data.about} />
        <div className="container mx-auto px-4 md:p-0 md:grid md:gap-2 md:grid-cols-2">
          <List data={data.frameworks} />
          <List data={data.programing} />
          <List data={data.other}/>
          <List data={data.languages}/>
        </div>
      </body>
    </>
  )
}
