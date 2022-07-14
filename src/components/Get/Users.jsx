import React, { useEffect } from 'react'
import axios from 'axios';
import User from './User';

function Users({users, setUsers, pageSize, totalUsersCount, setPageSize, setTotalUsersCount}) { 
  const showMore = (e)=>{
    setPageSize(pageSize+6);
    axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?count=${pageSize+6}`)
    .then(response=>{setUsers(response.data.users);
  });
  }
   
  React.useEffect(()=>{
    axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?count=6`)
    .then(response=>{
      setUsers(response.data.users);
      setTotalUsersCount(response.data.total_users);
  });
  },[])


  return (
    <div className='getBlock'>
      <div className='container'>
      <h2 className='getBlock__title title'>Working with GET request</h2>
        <div className='getBlock__users'>
          {users.map(user=>(
            <User key={user.id}  user={user}/>
          ))}                
            
        </div>
        {pageSize<=totalUsersCount ? <button className='getBlock__users-btn button' onClick={showMore}>Show more</button> : ''}
      </div>

    </div>
  )
}

export default Users; 
