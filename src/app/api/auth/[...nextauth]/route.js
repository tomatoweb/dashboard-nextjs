// Third-party Imports
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

/*
 * As we do not have backend server, the refresh token feature has not been incorporated into the template.
 * Please refer https://next-auth.js.org/tutorials/refresh-token-rotation link for a reference.
 */
const handler = NextAuth({
    session: {
        // Choose how you want to save the user session.
        // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
        // If you use an `adapter` however, we default it to `"database"` instead.
        // You can still force a JWT session by explicitly defining `"jwt"`.
        // When using `"database"`, the session cookie will only contain a `sessionToken` value,
        // which is used to look up the session in the database.
        strategy: 'jwt',

        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 30 * 24 * 60 * 60, // ** 30 days

        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        updateAge: 24 * 60 * 60, // 24 hours
    },
    providers: [
        CredentialProvider({
            name: 'Credentials',
            type: 'credentials',
            credentials: {},
            async authorize(credentials) {

                const { email, password } = credentials

                try {
                    // ** Login API Call to match the user credentials and receive user data in response along with his role
                    const res = await fetch(`${process.env.API_URL}/login`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email, password })
                    })
          
                    const data = await res.json()
          
                    if (res.status === 401) {
                      throw new Error(JSON.stringify(data))
                    }
          
                    if (res.status === 200) {
                      /*
                       * Please unset all the sensitive information of the user either from API response or before returning
                       * user data below. Below return statement will set the user object in the token and the same is set in
                       * the session which will be accessible all over the app.
                       */
                      return data
                    }
          
                    return null
                  } catch (e) {
                    throw new Error(e.message)
                  }

            }
        })
    ],    
    // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
    pages: {
        // redirect localhost:3001/api/auth/signin   to  localhost:3001/login
        signIn: ''
    },
    callbacks: {
        /*
         * While using `jwt` as a strategy, `jwt()` callback will be called before
         * the `session()` callback. So we have to add custom parameters in `token`
         * via `jwt()` callback to make them accessible in the `session()` callback
         */
        async jwt({ token, user }) {
            
          if (user) {
            /*
             * For adding custom parameters to user in session, we first need to add those parameters
             * in token which then will be available in the `session()` callback
             */
            token.name = user.name
          }
    
          return token
        },
        async session({ session, token }) {
          if (session.user) {
            // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
            session.user.name = token.name
          }
    
          return session
        }
    }
})

export { handler as GET, handler as POST }
