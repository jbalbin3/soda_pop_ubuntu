import React from 'react';
import NavBar from './NavBar';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      focus: 'home',
    };
  }

  toSearch() {
    this.setState({
      focus: 'search',
    });
  }

  // eslint-disable-next-line consistent-return
  render() {
    const { focus } = this.state;
    if (focus === 'home') {
      return (
        <div>
          <div>
            <NavBar />
          </div>
          <div>
            <button type="button" onClick={() => this.toSearch()}>Search &gt; </button>
          </div>
        </div>
      );
    }
    if (focus === 'search') {
      return (
        <div>
          <Search />
        </div>
      );
    }
  }
}

export default App;
