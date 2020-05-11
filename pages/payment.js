import Head from "next/head";
import { contentfulClient } from '../lib/contentful-client'
import React, { useEffect } from 'react'
import ProductPage from '../Components/Page/ProductPage'
import braintree from 'braintree-web'
import axios from 'axios'

export default () => {
  
  useEffect(async () => {
    const response = await axios.get('/api/braintreeClientToken')
    const clientToken = response.data.clientToken
    console.log(`Got braintree client token: ${clientToken}`)

    braintree.dropin.create(clientToken, 'dropin', {
      container: 'payment-form'
    })
  }, [])

  return (
    <div className="container">
      Hello world!
      <form id="checkout" method="post" action="/checkout">
        <div id="payment-form"></div>
        <input type="submit" value="Pay $10" />
      </form>
    </div>
  );
}
