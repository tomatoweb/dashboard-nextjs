import verticalNavContext from "@/contexts/verticalNavContext"
import { useContext } from "react"


const useVerticalNav = () => {

    const context = useContext(verticalNavContext)

    if(context === undefined) {
        throw new Error('useVerticalNav hook must be used inside the nav provider')
    }

  return context
}
export default useVerticalNav