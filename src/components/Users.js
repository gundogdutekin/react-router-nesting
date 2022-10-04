import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import User from './User'
import Post from'./Post'

function Users() {
  const [users, setUsers] = useState([])
  const {url, path } = useRouteMatch()
  
  console.log(url, path)
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} 
            
            <Link to={`${url}/posts/${user.id}`}><span className='ml10'>Posts</span></Link>
            <Link to={`${url}/${user.id}`}><span className='ml10'>Detail</span></Link>
           
            
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route exact path={`/users/:id`} component={User} />
        <Route exact path={`${path}/posts/:id`} component={Post} />
        
      </Switch>
    </div>
  )
}

export default  Users
