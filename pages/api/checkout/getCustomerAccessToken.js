import axios from "axios"
import { generateCustomerToken } from "../../../server/magentoConnector"

export default async (req, res) => {
  if (req.method == 'POST') {
    console.log(`Got request to generate a customer access token: ${JSON.stringify(req.body)}`)
    const response = await generateCustomerToken(req.body.email, req.body.password)
    return res.json(response.data)
  }

  return res.status(404)
}