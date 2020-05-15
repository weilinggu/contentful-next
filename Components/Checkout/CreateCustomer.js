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
    const response = await axios.post('/api/checkout/createCustomer', {
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
      <p>
        Enter values here to create a user. If you did this before, you can skip this step and use the previous 
        email/password combo in the next step.
      </p>

      <label htmlFor="firstName">First Name: </label>
      <input onChange={event => setFirstName(event.target.value)} />
      <br></br>

      <label>Last Name: </label>
      <input onChange={event => setLastName(event.target.value)} />
      <br></br>

      <label>Email: </label>
      <input onChange={event => setEmail(event.target.value)} /> (example: 'yourname@email.com')
      <br></br>

      <label>Password</label>
      <input onChange={event => setPassword(event.target.value)} /> (example: 'password')
      <br></br><br></br>

      <button onClick={createCustomer}>Create Customer</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} /> Drag the bottom right corner of this to show response
    </div>
  )
}