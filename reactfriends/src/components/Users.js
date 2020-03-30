import React, {useEffect, useState } from "react";

function  Users () {

    const [users, setUsers] = useState([])


    useEffect(() => {
        const getUsers = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const jsonResponse =  await response.json()
            console.log('user data response', jsonResponse)
            setUsers(jsonResponse)
        }

        getUsers()
    }, [])
 


  return (
    <div className='usersCard'>
        <ul className='usersList'>
    {
        users.map((names , index) =>{
            return <li key={`${names.name}-${index}`}>{names.name}
             <p>{names.email}</p>
             <p> {names.phone}</p>
              <hr/>
            </li>
           
        })



    }
    </ul>


    

  </div>


  )
}

export default Users;