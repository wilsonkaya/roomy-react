import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import RentalsIndex from '../containers/rentals_index';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <RentalsIndex/>
      </div>
    );
  }
}
