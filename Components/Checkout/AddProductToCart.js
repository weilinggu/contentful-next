import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()
  let [cartId, setCartId] = useState()
  let [sku, setSku] = useState()
  let [quantity, setQuantity] = useState()

  let [response, setResponse] = useState()

  const addProductToCart = async () => {
    setResponse('Loading...')
    const response = await axios.put('/api/checkout/createCustomerCart', {
      accessToken,
      cartId,
      sku,
      quantity
    })

    setResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Add a Simple Product to Cart</h2>
      <label>Access Token: </label>
      <input onChange={event => setAccessToken(event.target.value)} />
      <br></br>

      <label>Cart ID: </label>
      <input onChange={event => setCartId(event.target.value)} />
      <br></br>

      <label>Product SKU: </label>
      <input onChange={event => setSku(event.target.value)} />
      <br></br>

      <label>Quantity: </label>
      <input onChange={event => setQuantity(event.target.value)} />
      <br></br><br></br>

      <button onClick={addProductToCart}>Add to Cart</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} />
    </div>
  )
}