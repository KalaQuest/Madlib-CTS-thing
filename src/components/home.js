import React, { Component } from 'react';
import Header from './header';
import Card from './card';
 class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header('Bt-a-ga Madlibs', '--fill out the fields to complete the madlibs story--Then, push the button.') }
        <Card/>
      </div>
    );
  }
}
//things we need to fix

//labels in the content text
//generate button space/card height
export default Home;