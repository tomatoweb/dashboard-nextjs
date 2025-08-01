
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@/app/globals.css'
import '@/assets/iconify-icons/generated-icons.css'

// <head><meta charset="UTF-8" /></head>
export const metadata = {
  title: 'MUI Next.js App',
  description: 'Next 14 MUI 5' // <head><meta name="description" content="Next 14 MUI 5" /></head>
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
