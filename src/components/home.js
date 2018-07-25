import React, { Component } from 'react';
import Header from './header';
import Card from './card';
 class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header('Bt-a-ga Madlibs', 'fill out the fields to complete the madlibs story') }
        <Card/>
      </div>
    );
  }
}
export default Home;