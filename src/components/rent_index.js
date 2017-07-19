import React, {Component} from 'react'
import {fetchRentals} from '../actions'
import {connect} from 'react-redux'
import _ from 'lodash'

class RentIndex extends Component{
  constructor(props){
    super(props)
    this.state = {
      city: ''
    }
  }

  onInputChange(event){
    this.setState({city: event.target.value})
  }
  onSubmitForm(event){
    event.preventDefault()
    this.props.fetchRentals(this.state.city)
  }
  render(){
    return(
      <div>
        <form className="search-bar"  onSubmit={this.onSubmitForm.bind(this)}>
          <input
            value={this.state.city}
            onChange={this.onInputChange.bind(this)}
          />
      </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { rentals: state.rentals}
}

export default connect(mapStateToProps, {fetchRentals}) (RentIndex)
