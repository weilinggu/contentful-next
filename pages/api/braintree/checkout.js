import braintree from '../../../server/braintreeConnector'

export default async (req, res) => {
  console.log(`Got request to create a braintree transaction: ${JSON.stringify(req.body, null, 2)}`)
  const nonce = req.body.payload.nonce
  const deviceData = req.body.deviceData.correlation_id
  const amount = req.body.amount

  const response = await braintree.checkout(nonce, deviceData, amount)
  res.json(response)
}