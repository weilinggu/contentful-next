import braintree from '../../server/braintreeConnector'

export default async (req, res) => {
  const nonceFromClient = req.body.payment_method_nonce

  await braintree.checkout(nonceFromClient)
}