import { createCart, addSimpleProductToCart } from "../../../server/magentoConnector"

export default async (req, res) => {
  if (req.method == 'POST') {
    console.log(`Got request to create a customer cart: ${JSON.stringify(req.body)}`)
    const response = await createCart(req.body.accessToken)
    return res.json(response.data)
  }

  if (req.method == 'PUT') {
    console.log(`Got request to add simple product to cart: ${JSON.stringify(req.body)}`)
    const response = await addSimpleProductToCart(req.body.accessToken, {
      cartId: req.body.cartId,
      sku: req.body.sku,
      quantity: req.body.quantity,
    })
    return res.json(response.data)
  }
}