import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';

document.body.style.backgroundColor = "#eeeeee";
class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home} />
          <footer class="footer">
            <div className="copyright">&copy; 2020 rockytopcomputerservice.com</div>
          </footer>
      </Router>
    )
  }
}

export default App;
