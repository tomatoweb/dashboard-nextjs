
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@/app/globals.css'
import '@/assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'DotDev - MUI Next.js App',
  description: 'MUI v5 Next.js v14 App'
}

const RootLayout = ({ children }) => {
    return (
        <html id='__next'>
        <body className='flex is-full min-bs-full flex-auto flex-col'>
            {children}
        </body>
        </html>
    )
}

export default RootLayout
