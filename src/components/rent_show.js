import React, {Component} from 'react'
import {connect} from 'react-redux'

class RentShow extends Component{
  // componentDidMount(){
  //   const rental = this.props
  //   console.log(rental)
  //   // this.props.fetchPost(id)
  // }

  render(){
    const {rental} = this.props
    return(
      <div>
        Fatih
      </div>
    )
  }
}

function mapStateToProps({rentals}, ownProps){
  return {rental: rentals[ownProps.match.params.id]}
}
// function mapStateToProps({rentals}){
//   return {rentals}
// }

export default connect(mapStateToProps)(RentShow)
