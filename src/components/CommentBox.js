import React from 'react';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentBody: '',
    };

    this.onCommentChange = (event) => this.setState({ commentBody: event.target.value });
    this.handleKeyDown = this._handleKeyDown.bind(this);
  }

  _handleKeyDown(event) {
    if (event.which === 13 && this.state.commentBody.trim().length > 0) {
      this.props.onSubmit(this.state.commentBody);
      this.setState({ commentBody: '' });
    }
  }

  render() {
    return (
      <div className="CommentBox__root">
        <input
          type="text"
          placeholder="Add a comment"
          value={this.state.commentBody}
          onChange={this.onCommentChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default CommentBox;