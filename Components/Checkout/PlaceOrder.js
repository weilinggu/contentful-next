import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()
  let [cartId, setCartId] = useState()

  let [response, setResponse] = useState()

  const placeOrder = async () => {
    setResponse('Loading...')
    const response = await axios.put('/api/checkout/placeOrder', {
      cartId,
    }, {
      params: {
        accessToken,
      }
    })

    setResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Place Order</h2>
      <label>Access Token: </label>
      <input onChange={event => setAccessToken(event.target.value)} />
      <br></br>

      <label>Cart ID: </label>
      <input onChange={event => setCartId(event.target.value)} />
      <br></br><br></br>

      <button onClick={placeOrder}>Place Order</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} />
    </div>
  )
}