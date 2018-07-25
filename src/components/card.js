import React, {Component} from 'react';
import Input from './input';
import Content from './content';
const INITIAL_STATE = {

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
    celebtwo: '',
    celebthree: '',
    adjfour: '',
    nounthree: '',
    celebfour: '',
    adjfive: '',
    contentVisible: false
}

class Card extends Component {
    constructor() {
        super()
        this.state = INITIAL_STATE;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
handleInputChange(event) {
    
    this.setState({[event.target.name]: event.target.value})
       
    }
handleFormSubmit(event) {    
    event.preventDefault()
    if(this.state.contentVisible) {
        this.setState(INITIAL_STATE)
    } else {
         this.setState({contentVisible: true})
    }
   
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
            <form onSubmit={this.handleFormSubmit} className="card">
              <div className="card__inputs">
              
              
                  {inputData.map((data, index) => {
                      return Input((data), this.handleInputChange, index)
                      })}
              
              </div>
              <button type='submit'>{this.state.contentVisible ? 'Clear Form' : 'Generate Madlib'}</button>
             { this.state.contentVisible ? <Content data={this.state}/> : ''}
              {/*
              { Input("color", this.state.color, this.handleInputChange, 'color')}
              {Input("Plural Noun", this.state.pluralNoun, this.handleInputChange, 'pluralNoun')}
              { Input("Adjective", this.state.adjone, this.handleInputChange, 'adjone')}
              {Input("Celebrity", this.state.celebone, this.handleInputChange, 'celebone')}*/}
            </form>    
        )
    }
}
export default Card;