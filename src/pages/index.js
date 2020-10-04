import React from "react"
import List from "./../components/List"
import Paragraph from "./../components/Paragraph"
import Welcome from "./../components/Welcome"
import Experience from "./../components/Experience"
import Education from "./../components/Education"
import Links from "./../components/Links"
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
              title
              dates
              degree
              description
            }
          }
          experience {
            collection {
              company
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
              title
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

  return (
    <>
      <body>
        <Welcome />
        {/* <Links data={data.links} /> */}
        <Paragraph data={data.about} />
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4 md:p-0 md:grid md:gap-2 md:grid-cols-2">
            <List data={data.frameworks} />
            <List data={data.programing} />
            <List data={data.other} />
            <List data={data.languages} />
          </div>
        </div>
        <Experience data={data.experience} />
        <Education data={data.education} />
      </body>
    </>
  )
}
