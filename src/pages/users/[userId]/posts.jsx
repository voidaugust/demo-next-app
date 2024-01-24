import Card from "@/components/Card"
import { getPosts } from "@/pages/api/posts"
import { getUsers, getUserData } from "@/pages/api/users"

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
  const pageTitle = `Posts by user ${params.userId}`
  const posts = await getPosts()
  const users = await getUsers()
  const user = await getUserData(params.userId)
  
  return { props: {
    pageTitle,
    posts,
    users,
    user
  }}
}

export default function UserPostsPage({ posts, users, user }) {
  const getPostAuthorName = (id) => users.find(u => u.id === id).name
  const userName = getPostAuthorName(user.id)

  return (
    <>
      <h1>Posts by {userName}</h1>
      <ul>
        {
          posts
            .filter(post => post.userId === user.id)
            .map(post => (
              <Card key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Card>
            ))
        }
      </ul>
    </>
  )
}