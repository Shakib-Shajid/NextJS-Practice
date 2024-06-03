"use client";
import React, { useEffect, useState } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
    },[])
    return (
        <div>
            <h3 className="text-center">Total Users: {users.length}</h3>

            {
                users.map(user=>(
                    <div key={user.id} className="card w-1/2 bg-base-100  mx-auto my-10">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>{user.email}</p>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;