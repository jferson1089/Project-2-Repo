import React from "react";

function Favorites(props) {

   
    console.log('favorites log', props.fave)
  

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
        console.log('favorites return?', favorite)
        return  <li className="favorites" key={index}>
            <img src={favorite.picture.large} alt='image' />
            <h6>Favorited User</h6>
            <h2>{favorite.name.first}</h2>
            <h3>City:{favorite.location.city}</h3>

        </li>
    })
    


  return (<div className='fave' 
> 
     {favoriteReturn}
     

       
    
     
      
  </div>
  )
}

export default Favorites;