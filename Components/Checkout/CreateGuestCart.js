import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()

  let [response, setResponse] = useState()

  const createCart = async () => {
    setResponse('Loading...')
    const response = await axios.post('/api/checkout/createGuestCart', {
      accessToken
    })

    setResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Create a Guest Cart</h2>

      <button onClick={createCart}>Create Cart</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} />
    </div>
  )
}