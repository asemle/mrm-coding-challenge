import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      'filter': [],
      'list': ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Odio", "tempore", "Voluptates", "quidem", "rem", "vel", "labore", "dolores", "nemo", "possimus", "Recusandae", "eaque"]
    }
  }
  updateFilter = (value) => {
    if(value === "reset") {
      this.setState({
        'filter': []
      })
    }
    else if(this.state.filter.indexOf(value) === -1) {
      this.setState({
        'filter': [...this.state.filter, value]
      })
    } else {
      var newArr = [...this.state.filter];
      newArr.splice(newArr.indexOf(value), 1);
      this.setState({
        'filter': newArr
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="buttonBox">
          <button className={this.state.filter.indexOf("a") > -1 ? 'selected' : ''} value="a" onClick={e => this.updateFilter(e.target.value)}>a</button>
          <button className={this.state.filter.indexOf("e") > -1 ? 'selected' : ''}  value="e" onClick={e => this.updateFilter(e.target.value)}>e</button>
          <button className={this.state.filter.indexOf("i") > -1 ? 'selected' : ''}  value="i" onClick={e => this.updateFilter(e.target.value)}>i</button>
          <button value="reset" onClick={e => this.updateFilter(e.target.value)}>reset</button>
        </div>
        <ol>
          {this.state.list
            .filter(word => !this.state.filter.some(el => word.includes(el)))
            .map((element, i) =>
              <li key={i}>{element}</li>
            )
          }
        </ol>
      </div>
    );
  }
}

export default App;

