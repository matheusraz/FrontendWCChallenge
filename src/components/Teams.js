import React from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';

export default class Teams extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            teamChoice: '',
            matchesByTeam: []
        };
    }

    componentDidMount() {

        fetch(`http://localhost:8080/teams`)
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data.results);
            //console.log('Times:',this.state.teams);
            //this.setState({teams: data.results})
        })
    }

    render() {
        return (
        <div>
            <h2>{this.props.title}</h2>
          <Accordion>
            {this.state.teams.map(item => {
              return (
                <AccordionItem title={`Item ${item.country}`} expanded={item.group_id === 1}>
                  <div>
                    {`Item ${item.country} content`}
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
          </div>
        );
      }
}