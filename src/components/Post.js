import React from 'react'
import Comment from './Comment'

export default class Post extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      comments: [
        {text: 'Bom Post '}
      ],
      newComment: ''
    };

    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeComment = this.onChangeComment.bind(this)
  }

  onSubmit(e){
    this.setState({
      comments: [
        ... this.state.comments,
        {text: this.state.newComment}
      ]
    })
    this.setState({newComment: ''})
    e.preventDefault();
  }

  onChangeComment(e) {
    this.setState({ newComment: e.target.value })
  }

  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
          {this.state.comments.map((comment, index) => {
            return <Comment key={index} text={comment.text} />
          })}
        <form>
          <input value={this.state.newComment} onChange={this.onChangeComment}/>
          <button type="submit" onClick={this.onSubmit}>Comentar</button>
        </form>
      </div>
    );
  }
}
