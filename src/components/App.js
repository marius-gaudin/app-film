import React from 'react';
import Result from './Result';

class App extends React.Component {

  state = {
    searchText: null
  }

  onSearch() {
    this.setState({
      searchText: document.getElementById('search').value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center flex-column">
            <h1>What Watch ?</h1>
            <div className="form-inline my-2 my-lg-0 d-flex">
              <input className="form-control mr-sm-2" type="search" id="search" placeholder="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" id="search" onClick={() => this.onSearch()}>Search</button>
            </div>
          </nav>
        </header>
        <Result search={this.state.searchText} />
      </div>
    );
  }
  
}

export default App;
