import React, {Component} from 'react';
class Content extends Component {
  constructor() {  
    super()  
    this.count = 1;

  }
  componentDidUpdate() {
      this.count= 1;
  }
    renderlabel(data) {
        return [
           <div className="card__content__label">{this.count++}</div>,
           <b>{data}</b> 
        ]
    }
    render() {
        const data = this.props.data;
       
       // this.props.data.map((object, index) =>{
           // console.log(index);
       // })
// <span>{data.indexOf(data.color)}</span>
        return (
        <div className="card__content">
            <p>
                    Ladies and gents, and that random {data.nounthree}, this the {this.renderlabel(data.color)} Barber, your local barber, bringing you the fantabulous hairstyles of the game between the Cleveland {this.renderlabel(data.pluralNoun)}, who have no sense of style, and the {this.renderlabel(data.adjone)} Yankees. {this.renderlabel(data.celebone)} is pitching for the Yankees- rocking a pompador. Here's the pitch! It's a low {this.renderlabel(data.adjtwo)} ball that just misses the inside of the {this.renderlabel(data.nounone)} for a ball- looks like the pompador isn't paying off. That makes the count {this.renderlabel(data.numberone)} strikes and {this.renderlabel(data.numbertwo)} balls. Now here's the next pitch. The batter swings and trips. It's a long, hard {this.renderlabel(data.nountwo)} out to the {this.renderlabel(data.adjthree)} ground. But {this.renderlabel(data.celebtwo)} is coming up fast and has plans for a second outting, with his long, golden hair flowing dramatically in the breeze. The next batter up is {this.renderlabel(data.celebthree)}, the Cleveland {this.renderlabel(data.adjfour)}-baldy. Here's the pitch... and it's another ball... the {data.adjone} Yankees throw their hats to the ground, ranting about some {data.adjone} {this.renderlabel(data.nounthree)}. {this.renderlabel(data.celebfour)} scoops his up and throws it to first base, his afro bobbing unsteadily. It doesn't matter; the game is over. The Yankees are eliminated from the {this.renderlabel(data.adjfive)} League...  
            </p>
        </div>
        )                    
    }
}
export default Content;