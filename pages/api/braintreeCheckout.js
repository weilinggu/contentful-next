import braintree from '../../server/braintreeConnector'

export default async (req, res) => {
  const nonce = req.body.braintreePayload.nonce
  const deviceData = req.body.braintreePayload.deviceData
  const amount = req.body.amount

  const response = await braintree.checkout(nonce, deviceData, amount)
  res.json(response)
}