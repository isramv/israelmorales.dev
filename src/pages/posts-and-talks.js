import React from "react"
import Introduction from "../components/Introduction"
import Links from "../components/Links"
import { useStaticQuery, graphql } from "gatsby"

export default function PostAndTalks() {
  const result = useStaticQuery(graphql`
    query blogQuery {
      allBlogYaml {
        nodes {
          blogPosts {
            collection {
              published
              title
              topics
              url
            }
          }
        }
      }
    }
  `)

  const blogPostsArray = result.allBlogYaml.nodes[0].blogPosts.collection

  return (
    <div className="bg-gray-100">
      <Introduction />
      <div className="container mx-auto">
        <div className='container mx-auto p-2 md:px-0'>
          <Links />
        </div>
        <h2 className="text-3xl font-mono text-gray-800 my-2 px-2 md:px-0">
          Posts and talks
        </h2>
        {blogPostsArray.map((post, index) => {
          return (
            <div
              key={`post-${index}`}
              className="rounded-sm shadow-lg p-3 mb-4 bg-white mx-2 md:mx-0"
            >
              <h3>{post.title}</h3>
              <div>
                <a className='text-sm' href={post.url} target="_blank" rel="noreferrer">
                  {post.url}
                </a>
              </div>
              <div className="text-sm text-gray-700">{post.published}</div>
              <div className="text-sm text-gray-700">{post.topics}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
