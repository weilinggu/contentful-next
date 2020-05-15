import axios from "axios"
import { createCustomer } from "../../../server/magentoConnector"

export default async (req, res) => {
  console.log(`Got request to create customer: ${JSON.stringify(req.body)}`)
  const response = await createCustomer(req.body)
  return res.json(response.data)
}