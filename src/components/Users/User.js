import React, { useEffect, useState } from 'react';
import Public from '../Public/Public';
import './User.css'

const User = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div className="users">
            
            {users.length}
            <div className="user-container">
                {
                users.map(user => <Public key={user.key} user={user}></Public>)
                }
            </div>
            
        </div>
    );
};

export default User;