"use client"

import { Toaster, toast } from "sonner";
import React, { useEffect, useState } from "react";
import UsersList from "./UsersList" // becomes a client component

const Home = () => {

    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0) 


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json()) // implicit return
            .then( json => { setUsers(json) })  // body braces, no return
        },[] // fetch on mount Home
    )

    
    const increment = () => {        
        setCount(count + 1)
        setCount( (c) => c + 10 )
        setCount( (v) => v + 100 )        
    }


    return (        
        <div>            
            <Toaster />
            
            <UsersList users={users} />

{/* ici je peux mettre une simple référence à une fonction car pas de paramètre à passer */}
            <button onClick={increment} >{count}</button>     

{/* ici je dois écrire un event handler car je dois lui passer un paramètre
    si je faisais ceci : onClick={ toast('My first toast') }     
    la fonction toast s'exécuterais dès le mount du component */}
            <button onClick={() => toast('My first toast')}>Give me a toast</button>
        </div>
    )
}


export default Home