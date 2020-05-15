import { createGuestCart, addSimpleProductToCart } from "../../../server/magentoConnector"

export default async (req, res) => {
  if (req.method == 'POST') {
    console.log(`Got request to create a guest cart: ${JSON.stringify(req.body)}`)
    const response = await createGuestCart()
    return res.json(response.data)
  }
}