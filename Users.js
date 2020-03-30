import React, {useEffect, useState } from "react";

function  Users () {

    const [users, setUsers] = useState([])


    useEffect(() => {
        const getUsers = async () =>{
            const response = await fetch('https://randomuser.me/api/?page=3&results=50&seed=1089abc')
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

            <img src={names.picture.large} alt=''/>

               <h3> {names.name.first}  </h3> 
            
             <h4>{names.dob.age}</h4>
              <p>{names.email}</p>
             <p> {names.location.city}</p>
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