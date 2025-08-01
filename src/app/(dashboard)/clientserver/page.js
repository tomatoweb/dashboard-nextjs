
/*
		This demo shows that a server component can have a client component as parent
		but still stay a server component, thanks to the children pattern.
*/


import { Paper, Typography } from '@mui/material'
import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

const Ancestor = () => {

	console.log('This is the ancestor, a server component')

	return (
		<div className='pt-8'>
			<Typography variant='h5'>
				The Children Pattern : A server component can be nested in a client component
				and still stay a server component.
				Condition: the client component that contains the server component must be nested in a server component
			</Typography>
			<div className='bg-slate-700 text-center mt-4 py-6 px-12'>
				this is a server component
				<ClientComponent>
					<ServerComponent />
				</ClientComponent>
			</div>
			<div>
				<pre>
					{`

// server component (ancestor)
import { Paper, Typography } from '@mui/material'
import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'
const Ancestor = () => {
	return (
		<div className='pt-8'>
			<Typography variant='h5'>
				The Children Pattern : A server component can be nested in a client component
				and still stay a server component.
				Condition: the client component that contains the server component must be nested in a server component
			</Typography>
			<div className='bg-slate-700 text-center mt-4 py-6 px-12'>
				this is a server component
				<ClientComponent>
					<ServerComponent />
				</ClientComponent>
			</div>
		</div>
	)
}
export default Ancestor`}
				</pre>
			</div>
			<div>
				<pre>
					{`
// client component
'use client'
import ServerComponent from "./ServerComponent"                  
const ClientComponent = ({ children }) => {
    return (
        <div className="bg-slate-500 py-6 px-12 mt-4 text-black">
           this is a client component in a server component
					 <ServerComponent />
        </div>
    )
}`}
				</pre>
			</div>
			<div>
				<pre>
					{`
// server component				
export default function ServerComponent() {
	return (
		<div className="bg-slate-400 mt-6 py-4 mx-12 text-black">
			This is a server component in a client component
		</div>
	)
}
`}
				</pre>
			</div>
		</div>


	)

}

export default Ancestor