import React from 'react'
import Post from './Post'
import main from './css/App.css'

export default class App extends React.Component {
  render() {
    return(
      <div class="main">
        <h1>Hello World!</h1>
        <Post title='Aprendendo ReactJS (Chat Version)'/>
      </div>
    )
  }
}
