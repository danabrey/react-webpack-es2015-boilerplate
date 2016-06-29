import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/heading'

class App extends React.Component {
    render() {
        return (
            <Heading>It's alive!</Heading>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
