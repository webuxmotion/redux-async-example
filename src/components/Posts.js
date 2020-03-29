import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({posts}) => (
  <ul>
    {posts.map((post, i) => {
      return <li key={i}>
        <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
      </li>
    })}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
