import { setShippingAddressOnCart, addShippingAddressFromExistingAddress } from "../../../server/magentoConnector"

export default async (req, res) => {
  console.log(`Received request to set a shipping address from a customer address: ${JSON.stringify(req.body, null, 2)}`)
  const response = await addShippingAddressFromExistingAddress(req.query.accessToken, req.body)
  return res.json(response.data)
}