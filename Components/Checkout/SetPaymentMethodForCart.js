import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()
  let [cartId, setCartId] = useState()
  let [paymentMethodCode, setPaymentMethodCode] = useState()

  let [response, setResponse] = useState()

  const setPaymentMethodsOnCart = async () => {
    setResponse('Loading...')
    const response = await axios.put('/api/checkout/setCartPaymentMethod', {
      accessToken,
      cartId,
      paymentMethodCode,
    }, {
      params: {
        accessToken,
      }
    })

    setResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Set Payment Method Options on Cart</h2>
      <label>Access Token: </label>
      <input onChange={event => setAccessToken(event.target.value)} />
      <br></br>

      <label>Cart ID: </label>
      <input onChange={event => setCartId(event.target.value)} />
      <br></br>

      <label>Payment Method Code (currently only supports 'braintree'): </label>
      <input onChange={event => setPaymentMethodCode(event.target.value)} />
      <br></br><br></br>

      <button onClick={setPaymentMethodsOnCart}>Get Payment Methods</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} />
    </div>
  )
}