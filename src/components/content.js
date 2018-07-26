import React, {Component} from 'react';
class Content extends Component {
    render() {
        const data = this.props.data;
       
       // this.props.data.map((object, index) =>{
           // console.log(index);
       // })
// <span>{data.indexOf(data.color)}</span>
        return (
        <div className="card__content">
            <p>
                    Ladies and gents, and that random {data.nounthree}, this the {data.color} Barber, your local barber, bringing you the fantabulous hairstyles of the game between the Cleveland {data.pluralNoun}, who have no sense of style, and the {data.adjone} Yankees. {data.celebone} is pitching for the Yankees- rocking a pompador. Here's the pitch! It's a low {data.adjtwo} ball that just misses the inside of the {data.nounone} for a ball- looks like the pompador isn't paying off. That makes the count {data.numberone} strikes and {data.numbertwo} balls. Now here's the next pitch. The batter swings and trips. It's a long, hard {data.nountwo} out to the {data.adjthree} ground. But {data.celebtwo} is coming up fast and has plans for a second outting, with his long, golden hair flowing dramatically in the breeze. The next batter up is {data.celebthree}, the Cleveland {data.adjfour}-baldy. Here's the pitch... and it's another ball... the {data.adjone} Yankees throws their hats to the ground, ranting about {data.adjone} {data.nounthree}. {data.celebfour} scoops his up and throws it to first base, his afro bobbing unsteadily. It doesn't matter; the game is over. The Yankees are eliminated from the {data.adjfive} League...  
            </p>
        </div>
        )                    
    }
}
export default Content;