import { placeOrder } from "../../../server/magentoConnector"

export default async (req, res) => {
  console.log(`Got request to place order: ${JSON.stringify(req.body, null, 2)}`)
  const response = await placeOrder(req.query.accessToken, req.body)
  console.log(`Got here.`)
  return res.json(response.data)
}
