import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Favorites from "./Favorites";
import { Route } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [fave, setFave] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?inc=gender,name,nat=us,picture,dob,location,email&results=25&seed=1089abc"
      );
      const jsonResponse = await response.json();
      console.log("user data response", jsonResponse.results);
      setUsers(jsonResponse.results);
    };

    getUsers();
  }, []);

  const addToFave = elem => {
    setFave([...fave, elem]);
  };

  /*Favorites Button Addition */

  // const [favorites, setFavorites] = useState([])

  // const addToFave = user =>{
  //     setFavorites([...favorites, user])
  // }

  // const removeFavorite = index =>{
  //     const newFavorite = [...favorites]
  //     newFavorite.splice(index, 1)
  //     setFavorites(newFavorite)
  // }

  // const [faves, setFaves] = useState([])

  // const handleFaveToggle = user =>{
  //     const favesArr = faves.slice()
  //     const userIndex = favesArr.indexOf(user)

  //     if(userIndex === -1){
  //         favesArr.push(user)
  //     } else {
  //         favesArr.splice(userIndex, 1)
  //     }
  //     setFaves(favesArr)
  //      console.log('clicked user', faves)
  // }
  // console.log('users- is data coming down? ', routerProps)

  //    const users = props.map((names , index) =>{
  //         return (<li key={`${names.name.first}-${index}`}>
  //             <div className='card'>
  //         <img className='thumb' src={names.picture.large} alt=''/>

  //             <div className='favorites-button'  >
  //                 <FontAwesomeIcon icon={faCoffee}
  //                  />

  //                  </div>
  //               </div>
  //            <h2 className="first"> {names.name.first}  </h2>

  //          <h4 className='age'>Age : {names.dob.age}</h4>
  //           <p className='email'>Email : {names.email}</p>
  //          <p className="location"> Location : {names.location.city}</p>
  //          <p className="state">State : {names.location.state}</p>
  //         <br/><br/>
  //           <hr/>

  //         </li>
  //         )
  //     })
  const removeFromFave = index => {
    const newFave = [...fave];
    newFave.splice(index, 1);
    setFave(newFave);
  };

  return (
    <>
      <Favorites fave={fave} removeFromFave={removeFromFave} />
      <hr />
      <div className="usersCard">
        <ul className="usersList">
          {users.map((names, index) => {
            return (
              <li key={`${names.name.first}-${index}`}>
                <div className="card">
                  <img className="thumb" src={names.picture.large} alt="" />

                  <div className="favorites-button">
                    <FontAwesomeIcon
                      icon={faCoffee}
                      onClick={() => {
                        addToFave(names);
                      }}
                    />
                  </div>
                </div>
                <h2 className="first"> {names.name.first} </h2>

                <h4 className="age">Age : {names.dob.age}</h4>
                <p className="email">Email : {names.email}</p>
                <p className="location"> Location : {names.location.city}</p>
                <p className="state">State : {names.location.state}</p>
                <br />
                <br />
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Users;
