import { setShippingAddressOnCart, addShippingAddressFromExistingAddress } from "../../server/magentoConnector"

export default async (req, res) => {
  if (req.method == 'POST') {
    if (req.body.fromExisting) {
      console.log(`Received request to set a shipping address from a customer address: ${JSON.stringify(req.body, null, 2)}`)
      const response = await addShippingAddressFromExistingAddress(req.query.accessToken, req.body)
      return res.json(response.data)
    }

    console.log(`Received request to set a shipping address on a cart: ${JSON.stringify(req.body, null, 2)}`)
    const response = await setShippingAddressOnCart(req.query.accessToken, req.body)
    return res.json(response.data)
  }
}