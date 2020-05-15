import { setPaymentMethodOnCart } from "../../../server/magentoConnector"

export default async (req, res) => {
  console.log(`Got request to set the payment methods on a cart: ${JSON.stringify(req.body, null, 2)}`)
  const response = await setPaymentMethodOnCart(req.query.accessToken, req.body)
  return res.json(response.data)
}