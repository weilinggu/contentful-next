import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()
  let [cartId, setCartId] = useState()
  let [addressId, setAddressId] = useState()

  let [shippingAddressesResponse, setShippingAddressesResponse] = useState()
  let [addShippingAddressToCartResponse, setAddShippingAddressToCartResponse] = useState()

  const getCustomerShippingAddresses = async () => {
    setShippingAddressesResponse('Loading...')

    const response = await axios.get('/api/checkout/setCartShippingAddressFromExisting', {
      params: {
        accessToken,
      }
    })

    setShippingAddressesResponse(JSON.stringify(response, null, 2))
  }

  const addShippingAddressToCart = async () => {
    setAddShippingAddressToCartResponse('Loading...')

    const response = await axios.post('/api/shippingAddress', {
      fromExisting: true,
      cartId,
      addressId,
    }, {
      params: {
        accessToken,
      }
    })

    setAddShippingAddressToCartResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Set Shipping Address as Customer Address</h2>
      <p>
        Alternatively, you can set the shipping address by ID if one is stored on the customer account.
      </p>
      <label>Access Token: </label>
      <input onChange={event => setAccessToken(event.target.value)} />
      <br></br>

      <h3>Get Customer Addresses</h3> 
      <p>
        Use this to get a list of addresses to choose from.
      </p>

      <button onClick={getCustomerShippingAddresses}>Get Addresses</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={shippingAddressesResponse} /> Pick an address ID to use for shipping/billing addresses below

      <h3>Set Shipping Address On Cart</h3>
      <label>Cart ID</label>
      <input onChange={event => setCartId(event.target.value)} />
      <br></br>

      <label>Address ID</label>
      <input onChange={event => setAddressId(event.target.value)} />
      <br></br><br></br>

      <button onClick={addShippingAddressToCart}>Set Shipping Address</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={addShippingAddressToCartResponse} />
    </div>
  )
}