import React from "react";

function Favorites(props) {
  console.log("favorites log", props.fave);

  // const favorites = props.users.map((fave, index) =>{
  //     return(

  //         <li className='favelist'
  //         key={index}
  //         onClick={() =>{
  //             props.removeFavorite(index)
  //         }}
  //         >
  //             {fave}
  //         </li>
  //     )
  // } )

  // const currentFave = props.fave.map((fave , index) => {
  //     return (
  //         <li
  //         key = {index} >
  //             {fave}
  //             </li>
  //     )
  // })

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
            <p
              onClick={() => {
                props.removeFromFave(index);
              }}
            >
              UnFavorite Here
            </p>
          </div>
        </li>
      </>
    );
  });

  return <div className="fave">{favoriteReturn}</div>;
}

export default Favorites;
