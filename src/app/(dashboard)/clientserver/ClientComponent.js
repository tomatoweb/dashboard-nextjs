'use client'

import { useState } from "react"

const ClientComponent = ({children}) => {

    const [ count, setCount ] = useState(0)

    const increment = () => {
        setCount( x => x + 1)
        // or 
        // setCount( count + 1)
    }

    console.log('client data are in client browser and server console')

    return (
        <div className="p-6">
           {count}&nbsp;
           <button onClick={increment}>increment</button>
           {children}
        </div>
    )

}

export default ClientComponent