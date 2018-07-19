import React, {Component} from 'react';
class Content extends Component {
    render() {
        
        const data = this.props.data;

        return (
            <p>
                    Ladies and gentlemen, this is {data.color} Barber, your sportscaster, bringing you the last inning of the game between the Cleveland {data.pluralNoun} and the {data.adjone} Yankees. {data.celebone} is pitching for the Yankees. Here's the pitch! It's a low {data.adjtwo} ball that just cuts the inside of the {data.nounone} for a strike. That makes the count {data.numberone} strikes and {data.numbertwo} balls. Now here's the next pitch. The batter swings and connects. It's a long, high {data.nountwo} out to {data.adjthree} field. But {data.celebtwo} is coming up fast and has it for the second out. The next batter up is {data.celebthree}, the Cleveland {data.adjfour}-stop. Here's the pitch... and it's hit... a short ground ball to third {data.nounthree}. {data.celebfour} scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the {data.adjfive} League!  
            </p>

        )                    
    }
}
export default Content;