'use client'
import { useState } from 'react'
import Todos from './Todos'
import { Button } from '@mui/material'
import { useCallback } from 'react'

const page = () => {

    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () => {
        setCount( (c) => c + 1 )
    }

    // event handler callback function
    const addTodo = useCallback(() => {
        
        setTodos( (t) => [...t, "new Todo"] )
    }, [todos])

  return (
    <>
    <Todos todos={todos} addTodo={addTodo} />
    <hr />
    <div>
        Count: {count}
        <Button variant='outlined' onClick={increment}>
            +
        </Button>
    </div>
    </>
  )
}

export default page