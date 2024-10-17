import { getMode, getSystemMode } from "@/utils/serverHelpers"
import Providers from "@/components/Providers"
import LayoutWrapper from "@/components/layouts/LayoutWrapper"
import VerticalLayout from "@/components/layouts/VerticalLayout"
import Navigation from "@/components/layouts/vertical/Navigation"
import Navbar from "@/components/layouts/vertical/Navbar"
import ScrollToTop from '@/components/scroll-to-top'
import Customizer from '@/components/customizer'
import Button from '@mui/material/Button'
import { getDictionary } from '@/utils/getDictionary'

const layout = async ({ children, params }) => {

    const systemMode = getSystemMode()
    
    const dictionary = await getDictionary(params.lang = 'en')
    const mode = getMode()

    return (
        <Providers>
          <LayoutWrapper
            systemMode={systemMode}
            verticalLayout={
              <VerticalLayout
                navigation={<Navigation dictionary={dictionary} mode={mode} systemMode={systemMode} />}
                navbar={<Navbar />}
              >
                {children}
              </VerticalLayout>
            }            
          />

          <ScrollToTop className='mui-fixed'>
            <Button variant='contained' className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'>
              <i className='tabler-arrow-up' />
            </Button>
          </ScrollToTop>

          <Customizer />

        </Providers>
      )

}

export default layout