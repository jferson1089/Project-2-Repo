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

    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>
              <a href="">ReactFriends</a>
            </li>
          </Link>
          <Link to="/about/">
            <li>
              <a href="">About</a>
            </li>
          </Link>
       
          </ul>
             </nav>
          </header>
          <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/about/" component={About} />
              <Route exact path="/users/" component={Users} />
              <Route exact path="/users/fave" component={Favorites} />

          </main>


<footer>
  <nav>
    <ul>
          <Link to="/users/">
            <li>
              <a href="">Users</a>
            </li>
          </Link>
          <Link to="/users/fave">
            <li>
              <a href="">Favorites</a>
            </li>
          </Link>
        </ul>
      </nav>
     </footer>
    </div>

   
  </>
            
   
    
  );
}

export default App;
