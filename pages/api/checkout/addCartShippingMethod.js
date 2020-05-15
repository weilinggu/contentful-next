import axios from "axios"
import { addShippingMethodToCart } from "../../../server/magentoConnector"

export default async (req, res) => {
  console.log(`Got request to add a shipping method to cart: ${JSON.stringify(req.body, null, 2)}`)
  const response = await addShippingMethodToCart(req.query.accessToken, req.body)
  return res.json(response.data)
}