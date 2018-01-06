import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main/>
      </MuiThemeProvider>
    );
  }
}

export default App;
