import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import AccordionComponent from '../components/Accordion/Accordion'

class Accordion extends Component {
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
        {isEmpty
          ? (post.isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : (<div>
            {post.items.map((post, i) => {
              return <AccordionComponent 
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

export default connect(mapStateToProps)(Accordion)

Accordion.propTypes = {
  post: PropTypes.object.isRequired,
}
