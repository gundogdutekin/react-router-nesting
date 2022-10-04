import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function User() {
  let { id } = useParams()
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)


    useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [id])
  

  return (
    <>
      <h3>User Details</h3>
      {loading && <div>loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      {!loading && (
        <div>
          <Link to={`/users/${parseInt(id) + 1}`}>
            Next User({parseInt(id) + 1})
          </Link>
        </div>
      )}
    </>
  )
}

export default User
