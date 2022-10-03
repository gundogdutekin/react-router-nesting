import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import User from './User'

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
            <Link to={`${url}/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User} />
      </Switch>
    </div>
  )
}

export default  Users
