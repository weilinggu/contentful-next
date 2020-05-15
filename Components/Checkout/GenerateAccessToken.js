import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [email, setEmail] = useState()
  let [password, setPassword] = useState()

  let [response, setResponse] = useState()

  const generateAccessToken = async () => {
    setResponse('Loading...')
    const response = await axios.post('/api/checkout/getCustomerAccessToken', {
      email,
      password,
    })

    setResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Generate a Customer Access Token</h2>
      <label>Email: </label>
      <input onChange={event => setEmail(event.target.value)} />
      <br></br>

      <label>Password</label>
      <input onChange={event => setPassword(event.target.value)} />
      <br></br><br></br>

      <button onClick={generateAccessToken}>Generate Access Token</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} />
    </div>
  )
}