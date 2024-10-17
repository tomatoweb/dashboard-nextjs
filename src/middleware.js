import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import { ensurePrefix, withoutSuffix } from '@/utils/string'

const HOME_PAGE_URL = '/dashboards/analytics'


/* https://next-auth.js.org/configuration/nextjs */

/*
* this function checks the request.nextauth.token
* if it is null, redirect to login page
* else redirect to requested route (home by default)
*/
export default withAuth(

    async function middleware(request) {
        
        // If the user is not logged (request.nextauth.token is null)
        if ( !request.nextauth.token && request.nextUrl.pathname !== '/login' ) {
            
            let loginRoute = '/login'
            
            if (!(request.nextUrl.pathname === '/')) {
          

                // Add the user's requested route in the URL as a new param like this:   /login?redirectTo=%2Frequested_route
                const searchParamsStr = new URLSearchParams({ redirectTo: request.nextUrl.pathname }).toString()
                                
                loginRoute += `?${searchParamsStr}`   // /login?redirectTo=%2Frequested_route
            }

            const loginUrl = new URL( loginRoute, request.url ).toString() // e.g.   http://localhost:3002/login?redirectTo=%2Fhome

            return NextResponse.redirect(loginUrl)
        }        

        if ( request.nextauth.token && request.nextUrl.pathname === '/login' ) {

            const redirectUrl = new URL( HOME_PAGE_URL, request.url ).toString()

            return NextResponse.redirect(redirectUrl)
        }        
 
        // If the user is logged in and is trying to access root page, redirect to the home page
        if (request.nextUrl.pathname === '/') {
            const redirectUrl = new URL( HOME_PAGE_URL, request.url ).toString()

            return NextResponse.redirect(redirectUrl)
        }

        // If pathname already contains a locale, return next() else redirect with localized URL
        //return isUrlMissingLocale(pathname) ? localizedRedirect(pathname, locale, request) : NextResponse.next()
    },
    {
        callbacks: {
            authorized: () => {
                // This is a work-around for handling redirect on auth pages.
                // We return true here so that the middleware function above
                // is always called.
                return true
            }
        }
    }
)

/*
 *  IMPORTANT !!! ensure protection
 *
 * request paths MATCHER
 *
 * */
export const config = {
    matcher: [
        /*
        * Match all request paths except for the ones starting with:
        * - api (API routes)
        * - _next/static (static files)
        * - _next/image (image optimization files)
        * - all items inside the public folder
        *    - images (public images)
        *    - next.svg (Next.js logo)
        *    - vercel.svg (Vercel logo)
        *  rem: all route starting with _next are also 404 by default
        */
        '/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|next.svg|vercel.svg).*)'
    ]
}
