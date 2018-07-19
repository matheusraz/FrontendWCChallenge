import React from 'react'
import Score from './Score'

export default class Matches extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            matches: []
        }
    }

    componentDidMount() {

        fetch(`https://localhost:8080/${this.props.text}`)
        .then(results => {
            return results.json();
        }).then(data => {
            //console.log(data.results);
            this.setState({matches: data.results})
            console.log('Partidas:',this.state.matches);
        })
    }

    render(){
        return (
            <div>
                {this.state.matches.map(data => {
                    <Score text={`(${data.home.code})${data.home.country} ${data.home.goals} X ${data.away.goals} ${data.away.country}(${data.away.code})`}/>
                })}
            </div>
        );
    }
}