import React, { Component } from 'react'; // react compononent pulls from Reac
import moment from 'moment'; // moment is a package so it just pulls the moment package
import ExampleComponent from './ExampleComponent' // ExampleComponent is defined a pulled from its respected file.js
import TestComponent from './TestComponent' // same

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          Now
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />
      </div>
    );
  }
}

export default App;

// allows other files to use this App class
