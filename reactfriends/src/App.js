import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Favorites from "./components/Favorites";
import { Route, Link } from "react-router-dom";

function App() {
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //     const getUsers = async () =>{
  //         const response = await fetch('https://randomuser.me/api/?inc=gender,name,nat=us,picture,dob,location,email&results=10&seed=1089abc')
  //         const jsonResponse =  await response.json()
  //         console.log('user data response', jsonResponse.results)
  //         setUsers(jsonResponse.results)
  //     }

  //     getUsers()
  // }, [])

  // console.log('app getusers running', users)

  return (
    <>
      <div className="App">
        <header>
          <nav>
            <ul>
              <Link to="/">
                <a href="">
                  <img
                    src="https://res.cloudinary.com/jferson1089/image/upload/c_scale,h_59/v1585540434/iconfinder_React.js_logo_1174949_jjptab.png"
                    alt="logo"
                  ></img>
                  ReactFriends{" "}
                </a>
              </Link>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/users/" component={Users} />
          {/* <Route exact path="/users/fave" component={Favorites} /> */}
        </main>

        <footer>
          <nav>
            <ul>
              <Link to="/users/">
                <li>
                  <a href="">Users</a>
                </li>
              </Link>
              {/* <Link to="/users/fave">
                <li>
                  <a href="">Favorites</a>
                </li>
              </Link> */}
              <Link to="/about/">
                <li>
                  <a href="">About</a>
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
