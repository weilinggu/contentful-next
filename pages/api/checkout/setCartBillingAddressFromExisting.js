import { addBillingAddressFromExistingAddress } from "../../../server/magentoConnector"

export default async (req, res) => {
  if (req.method == 'POST') {
    if (req.body.fromExisting) {
      console.log(`Received request to set a billing address from a customer address: ${JSON.stringify(req.body, null, 2)}`)
      const response = await addBillingAddressFromExistingAddress(req.query.accessToken, req.body)
      return res.json(response.data)
    }
  }
}