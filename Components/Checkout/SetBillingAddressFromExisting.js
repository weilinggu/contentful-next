import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()
  let [cartId, setCartId] = useState()
  let [addressId, setAddressId] = useState()

  let [addBillingAddressToCartResponse, setAddBillingAddressToCartResponse] = useState()

  const addBillingAddressToCart = async () => {
    setAddBillingAddressToCartResponse('Loading...')

    const response = await axios.post('/api/checkout/setCartBillingAddressFromExisting', {
      fromExisting: true,
      cartId,
      addressId,
    }, {
      params: {
        accessToken,
      }
    })

    setAddBillingAddressToCartResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Set Billing Address as Customer Address</h2>
      <label>Access Token: </label>
      <input onChange={event => setAccessToken(event.target.value)} />
      <br></br>

      <h3>Set Billing Address On Cart</h3>
      <label>Cart ID</label>
      <input onChange={event => setCartId(event.target.value)} />
      <br></br>

      <label>Address ID</label>
      <input onChange={event => setAddressId(event.target.value)} />
      <br></br><br></br>

      <button onClick={addBillingAddressToCart}>Add Billing Address to Cart</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={addBillingAddressToCartResponse} />
    </div>
  )
}