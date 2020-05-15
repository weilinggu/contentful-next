import React, { useEffect, useState } from 'react'
import braintree_drop_in from 'braintree-web-drop-in'
import braintree from 'braintree-web'
import axios from 'axios'

export default () => {
  
  let [submitEnabled, setSubmitEnabled] = useState(false)
  let [amount, setAmount] = useState('')
  let [paymentMade, setPaymentMade] = useState(false)
  let [paymentSuccessful, setPaymentSuccessful] = useState(false)

  useEffect(() => {
    const configureHostedFields = async () => {
      const response = await axios.get('/api/braintree/clientToken')
      const clientToken = response.data.clientToken

      const client = await braintree.client.create({
        authorization: clientToken,
      })

      await braintree.hostedFields.create({
        client,
        styles: {
          'input': {
            'font-size': '16pt',
            'color': '#3A3A3A'
          },
          '.number': {
            'font-family': 'monospace',
          },
          '.valid': {
            'color': 'green'
          },
        },
        fields: {
          number: {
            container: '#card-number'
          },
          cvv: {
            container: '#cvv',
            placeholder: '***',
          },
          expirationDate: {
            container: '#expiration-date'
          }
        }
      })

      setSubmitEnabled(true)
    }

    configureHostedFields()
    
    setSubmitEnabled(true)
  }, [])

  const submitPayment = () => {
    dropInInstance.requestPaymentMethod(async (err, payload) => {
      const response = await axios.post('/api/braintree/checkout', {
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

      <form action="/" id="my-sample-form">
        <input type="hidden" name="payment_method_nonce" />
        <label htmlFor="card-number">Card Number: </label>
        <div id="card-number" style={{ height: '30px', width: '250px', border: '1px solid black'}}></div>
        <br></br>
        <label htmlFor="cvv">CVV</label>
        <div id="cvv" style={{ height: '30px', width: '50px', border: '1px solid black'}}></div>
        <br></br>
        <label htmlFor="expiration-date">Expiration Date</label>
        <div id="expiration-date" style={{ height: '30px', width: '250px', border: '1px solid black'}}></div>
        <br></br>
        <input id="my-submit" type="submit" value="Pay" disabled={!submitEnabled} />
      </form>

      <h3 style={{display: paymentMade && paymentSuccessful ? 'block': 'none'}}>Payment was successful! Reload page to try again</h3>
      <h3 style={{display: paymentMade && !paymentSuccessful ? 'block': 'none'}}>Payment failed. Check console or reload the page to try again</h3>
    </div>
  );
}
