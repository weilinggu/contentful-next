import Head from "next/head";
import { contentfulClient } from '../lib/contentful-client'
import React, { useEffect, useState } from 'react'
import ProductPage from '../Components/Page/ProductPage'
import braintree from 'braintree-web-drop-in'
import axios from 'axios'

export default () => {
  
  let [submitEnabled, setSubmitEnabled] = useState(false)
  let [dropInInstance, setDropInInstance] = useState(null)
  let [amount, setAmount] = useState('')
  let [paymentMade, setPaymentMade] = useState(false)
  let [paymentSuccessful, setPaymentSuccessful] = useState(false)

  useEffect(() => {
    const configureDropin = async () => {
      const response = await axios.get('/api/braintreeClientToken')
      const clientToken = response.data.clientToken
  
      setDropInInstance(await braintree.create({
        authorization: clientToken,
        container: '#dropin-container',
        dataCollector: {
          kount: true,
          paypal: true,
        },
        paypal: true,
      }))

    }

    setSubmitEnabled(true)


    configureDropin()
  }, [])

  const submitPayment = () => {
    dropInInstance.requestPaymentMethod(async (err, payload) => {
      const response = await axios.post('/api/braintreeCheckout', {
        amount,
        braintreePayload: payload,
      }).catch(error => {
        console.log(error)
        setPaymentSuccessful(false)
      })

      setPaymentMade(true)
      console.log(`Response: ${JSON.stringify(response, null, 2)}`)
      if (response && response.data && response.data.success) {
        setPaymentSuccessful(true)
      }
    })
  }

  const handleAmountInputChange = (event) => {
    setAmount(event.target.value)
  }

  return (
    <div>
      <h1>Payment</h1>
      <p>Use this page to make test payments to Braintree</p>
      <p>(Hint: Test Visa number: 4111111111111111; any expiration date)</p>
      <label htmlFor="amount">Amount to pay: </label>
      <input onChange={handleAmountInputChange}></input>
      <div id="dropin-container"></div>
      <p>Note: Other payment options available with this dropin (if configured): Paypal, Venmo, Apple Pay, Google Pay, 3-D Secure</p>
      <button disabled={!submitEnabled} onClick={submitPayment}>Submit Payment</button>

      <h3 style={{display: paymentMade && paymentSuccessful ? 'block': 'none'}}>Payment was successful! Reload page to try again</h3>
      <h3 style={{display: paymentMade && !paymentSuccessful ? 'block': 'none'}}>Payment failed. Check console or reload the page to try again</h3>
    </div>
  );
}
