export async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
  if (response.ok) return await response.json()
  else { return null }
}

export async function getPostData(id) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  if (response.ok) return await response.json()
  else { return null }
}