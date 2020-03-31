import React, {useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function  Users () {

    const [users, setUsers] = useState([])


    useEffect(() => {
        const getUsers = async () =>{
            const response = await fetch('https://randomuser.me/api/?inc=gender,name,nat=us,picture,dob,location,email&results=50&seed=1089abc')
            const jsonResponse =  await response.json()
            console.log('user data response', jsonResponse.results)
            setUsers(jsonResponse.results)
        }

        getUsers()
    }, [])
 

 



  return (
    <div className='usersCard'>
        <ul className='usersList'>
    {
        users.map((names , index) =>{
            return <li key={`${names.name.first}-${index}`}>
                <div className='card'>
            <img className='thumb' src={names.picture.large} alt=''/>
                <div className='favorites-button'  >
                    <FontAwesomeIcon icon={faCoffee} 
                    />
                     </div>
                  </div>
               <h2 className="first"> {names.name.first}  </h2> 
                
             <h4 className='age'>Age : {names.dob.age}</h4>
              <p className='email'>Email : {names.email}</p>
             <p className="location"> Location : {names.location.city}</p>
             <p className="state">State : {names.location.state}</p>
            <br/><br/>
              <hr/>
            
            </li>
           
        })



    }
    </ul>

  </div>
  )
}

export default Users;