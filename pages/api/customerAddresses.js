import { getCustomerAddresses } from "../../server/magentoConnector"

export default async (req, res) => {
  if (req.method == 'GET') {
    console.log(`Recevied request to get addresses for customer via access token ${req.query.accessToken}.`)
    const response = await getCustomerAddresses(req.query.accessToken)
    return res.json(response.data)
  }
}