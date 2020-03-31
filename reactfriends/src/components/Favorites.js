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
  

    


  return (<div className='fave' 

  >
     
      <p>Favorites?</p>

        {props.fave}
    
      <hr/>
      
  </div>
  )
}

export default Favorites;