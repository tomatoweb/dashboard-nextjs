'use client'

import { useEffect, useRef, useState } from "react";


const Ref = () => {

    const [inputValue, setInputValue] = useState("");

    console.log('re-rendering...')

    // useRef renvoie un objet ref avec une unique propriété current
    // Modifier une ref ne redéclenche pas le rendu (contrairement au useState)
    const count = useRef(0);
  
    useEffect (() => {
      count.current = count.current + 1;
      console.log(count.current)
    });
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </>
    )
}

export default Ref