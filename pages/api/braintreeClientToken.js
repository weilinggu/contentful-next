import braintree from '../../server/braintreeConnector'

export default async (req, res) => {
  const clientToken = await braintree.getClientToken('testCustomerId')

  res.json({
    clientToken,
  })
}
