import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()
  let [cartId, setCartId] = useState()
  let [paymentMethodCode, setPaymentMethodCode] = useState()
  let [paymentMethodNonce, setPaymentMethodNonce] = useState()
  let [deviceData, setDeviceData] = useState()

  let [response, setResponse] = useState()

  const setPaymentMethodsOnCart = async () => {
    setResponse('Loading...')
    const response = await axios.put('/api/checkout/setCartPaymentMethod', {
      accessToken,
      cartId,
      paymentMethodCode,
      paymentMethodNonce,
      deviceData,
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
      <p>
        This step requires you initialize a payment to Braintree. Before running, head to /payment
        and process a credit card transaction.
      </p>

      <label>Access Token: </label>
      <input onChange={event => setAccessToken(event.target.value)} />
      <br></br>

      <label>Cart ID: </label>
      <input onChange={event => setCartId(event.target.value)} />
      <br></br>

      <label>Payment Method Code: </label>
      <input onChange={event => setPaymentMethodCode(event.target.value)} /> (currently only supports 'braintree')
      <br></br>

      <label>Payment Nonce: </label>
      <input onChange={event => setPaymentMethodNonce(event.target.value)} /> Get this from /payment
      <br></br>

      <label>Device Data: </label>
      <input onChange={event => setDeviceData(event.target.value)} /> Get this from /payment
      <br></br>

      <br></br><br></br>

      <button onClick={setPaymentMethodsOnCart}>Add Payment Method</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} />
    </div>
  )
}