import Card from "@/components/Card"
import { getUsers, getUserData } from "@/pages/api/users"
import { useRouter } from "next/router"

export const getStaticPaths = async() => {
  const users = await getUsers()
  const usersPaths = users.map(user => ({ 
    params: { userId: user.id.toString() } 
  }))

  return { 
    paths: usersPaths,
    fallback: false
  }
}

export const getStaticProps = async({ params }) => {
  const pageTitle = `User ${params.userId}`
  const user = await getUserData(params.userId)
  
  return { props: {
    pageTitle, 
    user 
  }}
}

export default function UserPage({ user }) {
  const router = useRouter()
  if (router.isFallback) { 
    return <Card>Loading...</Card>
  }

  return (
    <>
      <h1>User {user.id}</h1>
      <ul>
        <Card key={user.id}>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
          <p>{user.phone}</p>
        </Card>
      </ul>
    </>
  )
}