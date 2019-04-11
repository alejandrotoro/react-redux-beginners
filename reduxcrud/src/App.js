// Redux 
import { Provider } from 'react-redux';
import store from './store';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

        </div>
      </Provider>
    );
  }
}

export default App;
