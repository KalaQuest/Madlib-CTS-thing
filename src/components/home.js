import React, { Component } from 'react';
import Header from './header';
 class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header('Bt Madlibs', 'fill out the fields to complete the madlibs story') }
        { Header() }
      </div>
    );
  }
}
export default Home;