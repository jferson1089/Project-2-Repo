import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Favorites from './components/Favorites'
import {Route, Link} from 'react-router-dom'


function App() {
  return (
    <>
    <div className="App">
      <nav>
        <ul>
          <Link to="/">
            <li>
              <a href="">Home</a>
            </li>
          </Link>
          <Link to="/about/">
            <li>
              <a href="">About</a>
            </li>
          </Link>
          <Link to="/users/">
            <li>
              <a href="">Users</a>
            </li>
          </Link>
          <Link to="/users/fave">
            <li>
              <a href="">Sign Up</a>
            </li>
          </Link>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/about/" component={About} />
      <Route exact path="/users/" component={Users} />
      <Route exact path="/users/fave" component={Favorites} />
    </div>

   
  </>
            
   
    
  );
}

export default App;
