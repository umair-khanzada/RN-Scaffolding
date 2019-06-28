import React, { Component }  from 'react';
import { ThemeProvider } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen'
import Routes from './src/routes';
import theme from './src/config/theme';

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render(){
    return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    )
  }
}