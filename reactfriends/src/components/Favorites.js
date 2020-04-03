import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Favorites(props) {
  const favoriteReturn = props.fave.map((favorite, index) => {
    console.log("favorites return?", favorite);
    return (
      <>
        <h6>Favorited User</h6>
        <li className="favorites" key={index}>
          <img src={favorite.picture.large} alt="image" />
          <div className="faveInfo">
            <h2>{favorite.name.first}</h2>
            <h4>City:{favorite.location.city}</h4>
            <br />
            <FontAwesomeIcon
              icon={faAddressBook}
              onClick={() => {
                props.removeFromFave(index);
              }}
            />
            Remove User
          </div>
        </li>
      </>
    );
  });

  return <div className="fave">{favoriteReturn}</div>;
}

export default Favorites;
