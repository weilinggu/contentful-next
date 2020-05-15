import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()
  let [cartId, setCartId] = useState()
  let [carrierCode, setCarrierCode] = useState()
  let [methodCode, setMethodCode] = useState()

  let [response, setResponse] = useState()

  const addShippingMethodToCart = async () => {
    setResponse('Loading...')

    const response = await axios.post('/api/checkout/addCartShippingMethod', {
      cartId,
      carrierCode,
      methodCode,
    }, {
      params: {
        accessToken,
      }
    })

    setResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Set Shipping Method on Cart</h2>
      <label>Access Token: </label>
      <input onChange={event => setAccessToken(event.target.value)} />
      <br></br>

      <label>Cart ID: </label>
      <input onChange={event => setCartId(event.target.value)} />
      <br></br>

      <label>Carrier Code: </label>
      <input onChange={event => setCarrierCode(event.target.value)} />
      <br></br>

      <label>Method Code: </label>
      <input onChange={event => setMethodCode(event.target.value)} />
      <br></br><br></br>

      <button onClick={addShippingMethodToCart}>Set Shipping Method</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} />
    </div>
  )
}