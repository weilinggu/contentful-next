import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
  
  let [accessToken, setAccessToken] = useState()
  let [cartId, setCartId] = useState()
  let [firstName, setFirstName] = useState()
  let [lastName, setLastName] = useState()
  let [company, setCompany] = useState()
  let [street, setStreet] = useState()
  let [city, setCity] = useState()
  let [region, setRegion] = useState()
  let [postCode, setPostCode] = useState()
  let [countryCode, setCountryCode] = useState()
  let [telephone, setTelephone] = useState()
  let [saveInAddressBook, setSaveInAddressBook] = useState()

  let [response, setResponse] = useState()

  const setShippingAddressOnCart = async () => {
    setResponse('Loading...')

    const response = await axios.post('/api/checkout/setCartShippingAddressNew', {
      cartId,
      firstName,
      lastName,
      company,
      street,
      city,
      region,
      postCode,
      countryCode,
      telephone,
      saveInAddressBook
    }, {
      params: {
        accessToken,
      }
    })

    setResponse(JSON.stringify(response, null, 2))
  }

  return (
    <div style={{border: '1px solid black'}}>
      <h2>Set Shipping Address on Cart</h2>
      <label>Access Token: </label>
      <input onChange={event => setAccessToken(event.target.value)} />
      <br></br>

      <label>Cart ID: </label>
      <input onChange={event => setCartId(event.target.value)} />
      <br></br>

      <label>First Name: </label>
      <input onChange={event => setFirstName(event.target.value)} />
      <br></br>

      <label>LastName: </label>
      <input onChange={event => setLastName(event.target.value)} />
      <br></br>

      <label>Company: </label>
      <input onChange={event => setCompany(event.target.value)} />
      <br></br>

      <label>Street Address: </label>
      <input onChange={event => setStreet(event.target.value.split(','))} />
      <br></br>

      <label>City: </label>
      <input onChange={event => setCity(event.target.value)} />
      <br></br>

      <label>Region: </label>
      <input onChange={event => setRegion(event.target.value)} />
      <br></br>

      <label>Postal Code: </label>
      <input onChange={event => setPostCode(event.target.value)} />
      <br></br>

      <label>Country Code: </label>
      <input onChange={event => setCountryCode(event.target.value)} />
      <br></br>

      <label>Telephone: </label>
      <input onChange={event => setTelephone(event.target.value)} />
      <br></br>

      <label>Save in addressbook ('true' or 'false'): </label>
      <input onChange={event => setSaveInAddressBook(event.target.value.toLowerCase() == 'true')} />
      <br></br>

      <button onClick={setShippingAddressOnCart}>Set Shipping Address</button>
      <br></br><br></br>
      <label>Response: </label>
      <textarea value={response} />
    </div>
  )
}