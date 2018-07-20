import React from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';
import Score from './Score'

export default class TeamsMatches extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            teamChoice: '',
            teamMatches: []
        };
        this.onClickTeam = this.onClickTeam.bind(this);
    }

    onClickTeam(item) {
      this.setState({teamChoice: item});
      fetch(`http://172.17.0.3:8080/matches/${item}`)
            .then(resultsMatch => {
                return resultsMatch.json();
            }).then(dataMatch => {
                //console.log(dataMatch)
                this.setState({teamMatches: dataMatch});
                console.log(this.state.teamMatches);
            });
    }

    componentDidMount() {

        fetch(`http://172.17.0.3:8080/teams`)
        .then(results => {
            return results.json();
        }).then(data => {
            //console.log(data);
            this.setState({teams: data})
            console.log('Times:',this.state.teams);
        })
    }

    render() {
        return (
        <div>
            <h2>{this.props.title}</h2>
          <Accordion>
            {this.state.teams.map((item, index) => {
              return (
                <AccordionItem key={index} title={`${item.country}`} onExpand={(e) => this.onClickTeam(item.country, e)}>
                <div>
                    {this.state.teamMatches.map((data, ind) => {
                        return(
                            <div key={ind}>
                                <Score text={`(${data.home.code})${data.home.country} ${data.home.goals} X ${data.away.goals} ${data.away.country}(${data.away.code})`}/>
                            </div>
                        )
                    })}
                </div>
                </AccordionItem>
              );
            })}
          </Accordion>
          </div>
        );
      }
}