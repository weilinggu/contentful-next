import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [firstName, setFirstName] = useState()
  let [lastName, setLastName] = useState()
  let [email, setEmail] = useState()
  let [password, setPassword] = useState()
  const isSubscribed = true

  let [response, setResponse] = useState()

  const createCustomer = async () => {
    setResponse('Loading...')
    const response = await axios.post('/api/customers', {
      firstName,
      lastName,
      email,
      password,
      isSubscribed,
    })

    setResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Create a customer</h2>
      <label htmlFor="firstName">First Name: </label>
      <input onChange={event => setFirstName(event.target.value)} />
      <br></br>

      <label>Last Name: </label>
      <input onChange={event => setLastName(event.target.value)} />
      <br></br>

      <label>Email: </label>
      <input onChange={event => setEmail(event.target.value)} />
      <br></br>

      <label>Password</label>
      <input onChange={event => setPassword(event.target.value)} />
      <br></br><br></br>

      <button onClick={createCustomer}>Create Customer</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} />
    </div>
  )
}