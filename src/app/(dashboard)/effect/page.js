'use client'

import { useEffect, useState } from "react"


const MyUseEffect = () => {

    const [count, setCount] = useState(1)

    useEffect(() => {

        let timer = setTimeout(() => {
            setCount( co => co + 1)
        }, 1000)

        return clearTimeout(timer)
    })

    return <>
    
        counter: {count}
    </>

}

export default MyUseEffect