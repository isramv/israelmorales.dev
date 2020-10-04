import React from "react"
import List from "./../components/List"
import Paragraph from "./../components/Paragraph"
import Introduction from "../components/Introduction"
import Experience from "./../components/Experience"
import Education from "./../components/Education"
import Links from "./../components/Links"
import { useStaticQuery, graphql } from "gatsby"

export default function Home() {
  const result = useStaticQuery(graphql`
    query resumeQuery {
      allResumeYaml {
        nodes {
          resume {
            about {
              text
              title
              type
            }
            education {
              title
              collection {
                dates
                degree
                description
                title
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
            links {
              collection {
                description
                logo
                title
                url
              }
              title
            }
            programing {
              collection
              title
            }
            other {
              collection
              title
            }
          }
        }
      }
    }
  `)

  const data = result.allResumeYaml.nodes[0].resume

  return (
    <div className="bg-gray-100">
      <Introduction />
      <h2 className="container mx-auto text-3xl font-mono text-gray-800 mt-2 px-4 md:px-0">Resume:</h2>
      <Links />
      <Paragraph data={data.about} />
      <Education data={data.education} />
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 md:p-0 md:grid md:gap-2 md:grid-cols-2">
          <List data={data.frameworks} />
          <List data={data.programing} />
          <List data={data.other} />
          <List data={data.languages} />
        </div>
      </div>
      <Experience data={data.experience} />
    </div>
  )
}
