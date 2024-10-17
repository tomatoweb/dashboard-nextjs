import React from "react";

const User = ({user}) => {

    if (!user) {
        return <p>No user</p>
    }
    

    return (
        <>             
            <p>User details :</p>
            <div>{user.name} : {user.email}</div>
        </>
    )
}

export default User