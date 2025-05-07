'use client'

import { useEffect, useState } from "react"


const MyUseEffect = () => {

    const [count, setCount] = useState(0)

    console.log(count)

    useEffect(() => {

        const timer = setTimeout(() => {
            setCount( currentCount => currentCount + 1)
        }, 1000)

        //return clearTimeout(timer)
    })

    return (
    <>    
      {count}
    </>
    )
}

export default MyUseEffect