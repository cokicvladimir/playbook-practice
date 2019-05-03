import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExecutionerTheme from './styles/theme';
import HomePage from './components/pages/homePage';
import PageNotFound from './components/pages/pageNotFound';
import LoaderView from './views/loader';
import './styles/App.css';

class App extends Component {
  render() {
    return (
        <Provider store={this.props.store}>
          <MuiThemeProvider theme={ExecutionerTheme}>
            <Router>
              <div className="App">
                <LoaderView />
                <Switch>
                  <Route
                      exact
                      path="/"
                      component={HomePage}
                  />
                  <Route path="*" component={PageNotFound} />
                </Switch>
              </div>
            </Router>
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
