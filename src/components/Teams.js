import React from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';
import Matches from './Matches'

export default class Teams extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            teamChoice: '',
            matchesByTeam: []
        };
        this.onClickTeam = this.onClickTeam.bind(this);
    }

    onClickTeam(e) {
      this.setState({teamChoice: e.target.value});
      e.preventDefault();
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
            {this.state.teams.map(item => {
              return (
                <AccordionItem value={`${item.country}`} title={`${item.country}`} onExpand={this.onClickTeam}>
                <div>
                  <Matches text={`${this.state.teamChoice}`} />
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
          </div>
        );
      }
}