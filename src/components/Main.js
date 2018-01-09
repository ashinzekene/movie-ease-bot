import React from 'react'
import ChatBox from './ChatBox'
import { connect } from 'react-redux'
import InputBox from './InputBox'
import { listenForMessages } from '../actions'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
// import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'

class Main extends React.Component{
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.listenForMessages()
  }
  render() {
    console.log(this.props)
    return(
      <div>
        <MyAppBar/>
        <div style={{marginBottom: "200px"}}>
          {
            this.props.messages.map((message, index) => (
              <ChatBox message= { message } key= {index} />
            ))
          }
        </div>
        <InputBox/>
      </div>
    )
  }
}

const MyAppBar = () => (
  <AppBar title="Emily" style={{ backgroundColor: "#8833CA",zIndex: "1500"}} showMenuIconButton={false} />
)
const MyDrawer = () => {
  return (
    <Drawer docked={true} disableSwipeToOpen={false} open={true} width={200} />
  )
}


const mapDispatchToProps = (dispatch) => ({
  listenForMessages: () => dispatch(listenForMessages())
})
const mapStoreToProps = (store) => ({
  messages: store.messages
})

export default connect(mapStoreToProps, mapDispatchToProps)(Main)