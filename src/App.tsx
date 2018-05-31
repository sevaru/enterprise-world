import * as React from 'react';
import './App.css';
import FormPageContainer from './containers/FormPageContainer';
import logo from './logo.svg';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FormPageContainer />
      </div>
    );
  }
}

export default App;
