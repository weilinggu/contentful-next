import braintree from 'braintree'
import {
  BRAINTREE_ENVIRONMENT,
  BRAINTREE_MERCHANT_ID,
  BRAINTREE_PUBLIC_KEY,
  BRAINTREE_PRIVATE_KEY
} from '../config.json'

const gateway = braintree.connect({
  environment: BRAINTREE_ENVIRONMENT == 'PRODUCTION' ? braintree.Environment.Production : braintree.Environment.Sandbox,
  merchantId: BRAINTREE_MERCHANT_ID,
  publicKey: BRAINTREE_PUBLIC_KEY,
  privateKey: BRAINTREE_PRIVATE_KEY,
})

const getClientToken = async () => {
  const response = await gateway.clientToken.generate({})

  return response.clientToken
}

const checkout = async (nonce, deviceData, amount) => {
  return await gateway.transaction.sale({
    amount,
    paymentMethodNonce: nonce,
    deviceData: deviceData,
    options: {
      submitForSettlement: false,
    },
  })
}

export default {
  getClientToken,
  checkout,
}