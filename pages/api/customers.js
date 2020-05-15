import axios from "axios"
import { createCustomer, generateCustomerToken, createCart, addProductToCart } from "../../server/magentoConnector"

export default async (req, res) => {
  if (req.method == 'POST') {
    console.log(`Got request to create customer: ${JSON.stringify(req.body)}`)
    const response = await createCustomer(req.body)
    return res.json(response.data)
  }

  const email = "aasddfadylan.p@myplanet.com"
  const password = "abc123abc"
  const response = await createCustomer({
    firstName: "Dylan",
    lastName: "Pomeroy",
    email,
    password,
    isSubscribed: true,
  })

  const response2 = await generateCustomerToken(email, password)
  console.log(`Response 2: ${JSON.stringify(response2.data)}`)
  const token = response2.data.data.generateCustomerToken.token

  const response3 = await createCart(token)
  console.log(`Response 3: ${JSON.stringify(response3.data)}`)
  const cartId = response3.data.data.customerCart.id

  const response4 = await addSimpleProductToCart({
    cartId,
    sku: '100010',
    quantity: 1,
    accessToken: token,
  })
  console.log(`Response 4: ${JSON.stringify(response4.data)}`)

  res.json({success: true})
}