import Card from "@/components/Card"
import { getPosts, getPostData } from "@/pages/api/posts"
import { getUsers } from "@/pages/api/users"
import { useRouter } from "next/router"

export const getStaticPaths = async() => {
  const posts = await getPosts()
  const postsPaths = posts.map(post => ({ 
    params: { postId: post.id.toString() } 
  }))

  return { 
    paths: postsPaths,
    fallback: false
  }
}

export const getStaticProps = async({ params }) => {
  const pageTitle = `Post ${params.postId}`
  const post = await getPostData(params.postId)
  const users = await getUsers()
  
  return { props: { 
    pageTitle,
    post,
    users
  }}
}

export default function PostPage({ post, users }) {
  const getPostAuthorName = (id) => users.find(user => user.id === id).name

  const router = useRouter()
  if (router.isFallback) { 
    return <Card>Loading...</Card>
  }

  return (
    <Card key={post.id}>
      <h1>Post {post.id} by {getPostAuthorName(post.userId)}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Card>
  )
}