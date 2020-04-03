import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Favorites from "./Favorites";

function Users() {
  const [users, setUsers] = useState([]);
  const [fave, setFave] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?inc=gender,name,nat=us,picture,dob,location,email&results=40&seed=1089abc"
      );
      const jsonResponse = await response.json();
      setUsers(jsonResponse.results);
    };

    getUsers();
  }, []);

  const addToFave = elem => {
    setFave([...fave, elem]);
  };

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
                      icon={faAddressBook}
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
