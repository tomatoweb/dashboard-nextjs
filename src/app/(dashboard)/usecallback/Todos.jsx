import { Button } from '@mui/material'
import { memo } from 'react'

const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
        <h2>My Todos</h2>
        {todos.map( (todo, index) => {
            return <p key={index}>{todo}</p>
        })}
        <Button variant='outlined' onClick={addTodo}>add Todo</Button> 
        </>
    )
}

export default memo(Todos)