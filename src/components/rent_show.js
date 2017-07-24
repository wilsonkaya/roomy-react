import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRental} from '../actions/index'
import {Link} from "react-router-dom"

class RentShow extends Component{
componentDidMount(){
 const {id} = this.props.match.params
 this.props.fetchRental(id)
}

onDeleteClick(){
  //this.props.match.params is coming from router
  const {id} = this.props.match.params
  this.props.deletePost(id, () => {
    //this is programatic navigation
  this.props.history.push('/')
  })
}
  render(){
    const {rental} = this.props
    if(!rental){
    return <div> Loading </div>
  }
    return(
      <div>
          <Link to="/">Back To Index</Link>
          <button className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
          >
          Delete Post
          </button>
          <h3>{rental.title}</h3>
        </div>
    )
  }
}

function mapStateToProps({rentals}, ownProps){
  return {rental: rentals[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchRental})(RentShow)
