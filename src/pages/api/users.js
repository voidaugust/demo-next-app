export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/')
  if (response.ok) return await response.json()
  else { return null }
}

export async function getUserData(id) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  if (response.ok) return await response.json()
  else { return null }
}