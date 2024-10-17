'use client'

import { useState, createContext, useContext } from "react";

const UserContext = createContext()

// provider component
const Component1 = () => {
    const [user, setUser] = useState('John Doe')
    return (
        <UserContext.Provider value={user}>
            <h1>Component1</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

const Component2 = () => {
    return (
        <>
            <h1>Component2</h1>
            <Component3 />
        </>
    )
}

const Component3 = () => {
    return (
        <>
            <h1>Component3</h1>
            <Component4 />
        </>
    )
}
const Component4 = () => {
    return (
        <>
            <h1>Component4</h1>
            <Component5 />
        </>
    )
}

// consumer component
const Component5 = () => {

    const theuser = useContext(UserContext)

    return (
        <>
            <h1>Component5</h1>
            <p>{`Hello ${theuser}, in last child component`}</p>
        </>
    )
}

export default Component1