import React from 'react'
import Teams from './Teams'

export default class App extends React.Component {
  render() {
    return(
      <div class="main">
        <h1>Copa do Mundo!</h1>
        <Teams title='*Visualize os placares das seleções na copa*'/>
      </div>
    )
  }
}
