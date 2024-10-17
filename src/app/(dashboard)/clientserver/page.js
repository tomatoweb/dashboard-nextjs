

import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

const ClientServer = () => {

    console.log('Home is a server component')

    return (
        <div>Home

            
                <ClientComponent>
                    <ServerComponent />
                </ClientComponent>

            
        </div>
        
    )
    
}

export default ClientServer