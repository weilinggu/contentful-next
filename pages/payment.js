import React, { useEffect, useState } from 'react'
import braintree_drop_in from 'braintree-web-drop-in'
import braintreeDataCollector from 'braintree-web/data-collector'
import braintreeClient from 'braintree-web/client'
import braintreeHostedFields from 'braintree-web/hosted-fields'
import axios from 'axios'

export default () => {
  
  let [submitEnabled, setSubmitEnabled] = useState(false)

  let [hostedFieldsInstance, setHostedFieldsInstance] = useState()
  let [dataCollectorInstance, setDataCollectorInstance] = useState()

  let [nonce, setNonce] = useState()
  let [deviceData, setDeviceData] = useState()

  useEffect(() => {
    const configureHostedFields = async () => {
      const response = await axios.get('/api/braintree/clientToken')
      const clientToken = response.data.clientToken

      const client = await braintreeClient.create({
        authorization: clientToken,
      })

      setDataCollectorInstance(await braintreeDataCollector.create({
        client,
      }))

      setHostedFieldsInstance(await braintreeHostedFields.create({
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
      }))

      setSubmitEnabled(true)
    }

    configureHostedFields()
  }, [])

  const tokenizePayment = async () => {
    const hostedFieldsPayload = await hostedFieldsInstance.tokenize()
    setNonce(hostedFieldsPayload.nonce)

    const deviceDataPayload = await dataCollectorInstance.getDeviceData({ raw: true })
    setDeviceData(deviceDataPayload.correlation_id)
  }

  return (
    <div>
      <h1>Payment POC</h1>
      <p>Use this page to make test payment requests to Braintree</p>
      <p>(Hint: Test Visa number: 4111111111111111; any expiration date + any cvv)</p>

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
        <input id="my-submit" type="button" value="Pay" disabled={!submitEnabled} onClick={tokenizePayment} />
      </form>

      <br></br><br></br>
      <p>
        After making the payment above, these fields will give you data to use when setting the payment
        method in /checkout
      </p>
      <label>Nonce: </label>
      <input type="text" value={nonce} />

      <br></br>
      <label>Device Data: </label>
      <input type="text" value={deviceData} />
    </div>
  );
}
