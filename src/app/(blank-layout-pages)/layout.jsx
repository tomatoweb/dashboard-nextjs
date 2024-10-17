import { getSystemMode } from "@/utils/serverHelpers"
import BlankLayout from "@/components/layouts/BlankLayout"
import Providers from "@/components/Providers"

const layout = ({children, params}) => {
    const systemMode = getSystemMode()
    return (
        <Providers>
            <BlankLayout systemMode={systemMode}>
                {children}
            </BlankLayout>
        </Providers>
    )
}

export default layout