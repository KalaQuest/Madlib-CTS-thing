import React, {Component} from 'react';
import Input from './input';
import Content from './content';
class Card extends Component {
    constructor() {
        super()
        this.state = {
            color: '',
            pluralNoun: '',
            adjone: '',
            celebone: '',
            adjtwo: '',
            nounone: '',
            numberone: '',
            numbertwo: '',
            nountwo: '',
            adjthree: '',
            celetwo: '',
            celethree: '',
            adjfour: '',
            nounthree: '',
            celefour: '',
            adjfive: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
handleInputChange(event) {
    
    this.setState({[event.target.name]: event.target.value})
       
    }
      render() {
      const inputData = [
          {label: 'Color', state: this.state.color, name: 'color'},
          {label: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},         
          {label: 'Adjective', state: this.state.adjone, name: 'adjone'},
          {label: 'Celebrity', state: this.state.celebone, name: 'celebone'},

          {label: 'Adjective', state: this.state.adjtwo, name: 'adjtwo'},
          {label: 'Noun', state: this.state.nounone, name: 'nounone'},
          {label: 'Number', state: this.state.numberone, name: 'numberone'},         
          {label: 'Number', state: this.state.numbertwo, name: 'numbertwo'},
              
          
          {label: 'Noun', state: this.state.nountwo, name: 'nountwo'},
          {label: 'Adjective', state: this.state.adjthree, name: 'adjthree'},         
          {label: 'Celebrity', state: this.state.celebtwo, name: 'celebtwo'},
          {label: 'Celebrity', state: this.state.celebthree, name: 'celebthree'}, 
          
          {label: 'Adjective', state: this.state.adjfour, name: 'adjfour'},
          {label: 'Noun', state: this.state.nounthree, name: 'nounthree'},         
          {label: 'Celebrity', state: this.state.celebfour, name: 'celebfour'},
          {label: 'Adjective', state: this.state.adjfive, name: 'adjfive'}          
      ]

      
        return (
            <div className="card">
              
                  {inputData.map(data => Input((data), this.handleInputChange))}
              <Content data={this.state}/>
              
              {/*
              { Input("color", this.state.color, this.handleInputChange, 'color')}
              {Input("Plural Noun", this.state.pluralNoun, this.handleInputChange, 'pluralNoun')}
              { Input("Adjective", this.state.adjone, this.handleInputChange, 'adjone')}
              {Input("Celebrity", this.state.celebone, this.handleInputChange, 'celebone')}*/}
            </div>    
        )
    }
}
export default Card;