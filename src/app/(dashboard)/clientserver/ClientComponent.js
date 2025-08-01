'use client'
import ServerComponent from "./ServerComponent"

                  
const ClientComponent = ({ children }) => {
    return (
        <div className="bg-slate-500 py-6 px-12 mt-4 text-black">
           this is a client component in a server component
					 <ServerComponent />
        </div>
    )

}

export default ClientComponent