import { useSession } from "next-auth/react"

export default function Component() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }

  return <>
    <h3>{status}</h3>
    <h3>{ session || 'no session'}</h3>
    <a href="/api/auth/signin">Sign in</a>
  </> 
  
}