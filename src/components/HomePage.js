import React, { useContext } from 'react'
import UserContext, { UserConsumer } from './UserContext'

export default function HomePage()  {
  const user = useContext(UserContext)

  return <UserConsumer>
  {(data) => {
    return <div>{user.name}{user.loggedIn}</div>
  }}
</UserConsumer>
}
