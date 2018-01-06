import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import ContentSend from 'material-ui/svg-icons/content/send'
import { sendAIMessage } from '../actions'
import '../App.css'

class InputBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault()
    if (this.state.message) {
      const msg = Object.assign({}, this.state, {date: new Date()})
      console.log("message sent",msg)
      this.props.sendMessage(msg.message)
      this.setState({message: ""})
    }
  }
  render() {
    return (
      <Paper className="input-box">
        <MyTextField text={this.state.message} width={ 100} handleKeyUp={(e) => e.keyCode === 13 ? this.handleClick(e) : null} handleClick={ (e) => this.setState({message: e.target.value})} />
        <FlatButton 
          icon={<ContentSend />}
          onClick={this.handleClick} 
          style={{backgroundColor: "transparent"}}  
          type="submit"
        />
      </Paper>
    )
  }
}

const MyTextField = (props) => {
  return (
    <TextField 
      value={props.text} 
      multiLine= {true} 
      rowsMax={2} 
      underlineFocusStyle={{ borderColor: "#8833CA",backgroundColor: "#8833CA"}} 
      hintText="Emily is waiting" 
      style={{ width: "Calc(100% - 100px)"}}
      onKeyDown ={ (e) => props.handleKeyUp(e) } 
      onChange={ (e)=> props.handleClick(e) } />
  )
}
const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => dispatch(sendAIMessage(message))
})

export default connect(null, mapDispatchToProps)(InputBox)