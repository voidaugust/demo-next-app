import { getUsers } from "@/pages/api/users"
import styles from "@/styles/users.module.css"

export const getStaticProps = async() => {
  const users = await getUsers()
  return { 
    props: { 
      users
    },
  }
}

export default function UsersPage({ users }) {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {
          users
            .map(user => (
              <li key={user.id} className={styles.card}>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <p>{user.phone}</p>
              </li>
            ))
        }
      </ul>
    </>
  )
}