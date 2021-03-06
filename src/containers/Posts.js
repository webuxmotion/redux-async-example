import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import Accordion from '../components/Accordion/Accordion'

class Post extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPost())
  }

  componentDidUpdate(prevProps) {
  }
  render() {
    const { post } = this.props
    const isEmpty = post.items.length === 0
    
    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchPost())}>Reload</button>
        {isEmpty
          ? (post.isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : (<div>
            {post.items.map((post, i) => {
              return <Accordion 
                key={i}
                title={post.title}
                content={post.body}
              />
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
