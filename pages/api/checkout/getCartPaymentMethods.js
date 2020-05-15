import { getPaymentMethodsForCart } from "../../../server/magentoConnector"

export default async (req, res) => {
  console.log(`Got request to get the payment methods for a cart: ${JSON.stringify(req.body, null, 2)}`)
  const response = await getPaymentMethodsForCart(req.query.accessToken, req.body)
  return res.json(response.data)
}