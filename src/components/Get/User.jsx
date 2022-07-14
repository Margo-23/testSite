import React from 'react'

function User({user}) {
  return (
    <div className='user'>
        <div className='user__photo'><img className='user__photo-img' alt='user photo' src={user.photo}></img></div>
        <div className='user__name'>{user.name}</div>
        <div className='user__position'>{user.position}</div>
        <div className='user__email'>{user.email}</div>
        <div className='user__phone'>{user.phone}</div>        
    </div>
  )
}

export default User