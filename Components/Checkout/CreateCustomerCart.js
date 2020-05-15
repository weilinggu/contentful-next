import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()

  let [response, setResponse] = useState()

  const createCart = async () => {
    setResponse('Loading...')
    const response = await axios.post('/api/checkout/createCustomerCart', {
      accessToken
    })

    setResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Create a Customer Cart</h2>
      <p>Create a cart to use in future steps. Calling this when there is already a cart will return the existing one</p>

      <label>Access Token</label>
      <input onChange={event => setAccessToken(event.target.value)} />
      <br></br><br></br>

      <button onClick={createCart}>Create Cart</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} /> Copy the "customerCart" -> "id" value to use as "Cart ID" below
    </div>
  )
}