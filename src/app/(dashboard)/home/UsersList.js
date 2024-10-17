import React, { useEffect, useState } from "react";
import User from './User' // becomes a client component


const UsersList = ({ users }) => {

    const [user, setUser] = useState(null)
    const [id, setId] = useState(0)

    useEffect(() => {
        if (id > 0) {

            // get a user's data
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => response.json())
                .then(json => { setUser(json) }
            )
        }
    },[id]) // only fetch on mount UsersList or if id update


    return (               
        <div className="user-list">            

            {users.map( u => (                   
                    <div className="user-item" key={u.id} onClick={()=>setId(u.id)}>
                        {u.id} {u.name}
                    </div>
                )
            )}

            <User user={user} />

        </div>        
    )
}

export default UsersList
