import React, {useEffect, useState } from "react";

function  Users () {

    const [users, setUsers] = useState([])


    useEffect(() => {
        const getUsers = async () =>{
            const response = await fetch('https://randomuser.me/api/?page=3&results=10&seed=1089abc')
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
            return <li key={`${names.name.first}-${index}`}>{names.name.first}
             <p>{names.email}</p>
             <p> {names.location.city}</p>
             <img src={names.picture.thumbnail} alt=''/>
              <hr/>
            </li>
           
        })



    }
    </ul>


    

  </div>


  )
}

export default Users;