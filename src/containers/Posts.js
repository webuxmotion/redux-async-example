import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class Post extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPost())
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.selectedSubreddit !== this.props.selectedSubreddit) {
    //   const { dispatch, selectedSubreddit } = this.props
    //   dispatch(fetchPostsIfNeeded(selectedSubreddit))
    // }
  }
  render() {
    const { post } = this.props
    const isEmpty = post.items.length === 0
    
    return (
      <div>
        {isEmpty
          ? (post.isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : (<div>
            {post.items.map((post, i) => {
              return <li key={i}>
                <b>{post.title}</b>
                <p>{post.body}</p>
              </li>
            })}
          </div>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { post } = state
  return {
    post
  }
}

export default connect(mapStateToProps)(Post)

Post.propTypes = {
  post: PropTypes.object.isRequired,
}
