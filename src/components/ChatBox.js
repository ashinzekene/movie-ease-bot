import React from 'react';
import '../App.css'

class ChatBox extends React.Component {
  render() {
    const { message } = this.props
    return (
    <div>
      <div className="chatBubble">
        <div className={ `chat-bubble ${message.from}`}>
          <div className="message">{ message.message }</div>
          <div className="message-detail">
            <span>{message.from.toUpperCase()} </span>
            <span>{ message.timestamp.toLocaleTimeString().replace(/:[0-9]{2} /, " ") }</span>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ChatBox