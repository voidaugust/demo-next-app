import Card from "@/components/Card"
import { getUsers } from "@/pages/api/users"

export const getStaticProps = async() => {
  const pageTitle = "Users"
  const users = await getUsers()
  return { props: { 
    pageTitle,
    users
  }}
}

export default function UsersPage({ users }) {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {
          users
            .map(user => (
              <Card key={user.id}>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <p>{user.phone}</p>
              </Card>
            ))
        }
      </ul>
    </>
  )
}