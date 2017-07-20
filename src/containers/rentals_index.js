import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import _ from 'lodash'

class RentalsIndex extends Component {
  renderRetanls(){
    // console.log(this.props.rentlas)
    return _.map(this.props.rentals, posts =>{
      return _.map(posts, post => {
        return(
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        )
      })


    })
  }
  render(){
    return(
      <div>
        <ul>
          {this.renderRetanls()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {rentals: state.rentals}
}

export default connect(mapStateToProps)(RentalsIndex)
