import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Post() {
  const { id } = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])
  
  return (
    <>
      <h3>User's Posts</h3>
      {loading && <div>loading...</div>}
      {!loading && posts.map((post) => (
        <code key={post.id}>{ <code>{post.body}</code>}</code>
      ))}
    </>
  )
}

export default Post
