import Card from "@/components/Card"
import { getPosts } from "@/pages/api/posts"
import { getUsers } from "@/pages/api/users"

export const getStaticProps = async() => {
  const pageTitle = "Posts"
  const posts = await getPosts()
  const users = await getUsers()
  return { 
    props: { 
      pageTitle,
      posts,
      users
    }
  }
}

export default function PostsPage({ posts, users }) {
  const getPostAuthorName = (id) => users.find(user => user.id === id).name

  return (
    <>
      <h1>10 posts</h1>
      <ul>
        {
          posts
            .filter(post => post.id <= 10)
            .map(post => (
              <Card key={post.id}>
                <h2>{getPostAuthorName(post.userId)}</h2>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Card>
            ))
        }
      </ul>
    </>
  )
}