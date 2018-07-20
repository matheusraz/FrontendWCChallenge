import React from 'react'
import TeamsMatches from './TeamsMatches'
import main from './css/App.css'

export default class App extends React.Component {
  render() {
    return(
      <div class="main">
        <h1>Copa do Mundo!</h1>
        <TeamsMatches title='*Visualize os placares das seleções na copa*'/>
      </div>
    )
  }
}
