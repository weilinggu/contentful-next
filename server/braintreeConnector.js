const braintree = require('braintree')

const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: 'nqzdbfsqgkgm6jvn',
  publicKey: 'vm7rw5dm6wwxssjm',
  privateKey: '89912c7cf8de9d039a0500ad94a648d3'
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
      submitForSettlement: true,
    },
  })
}

export default {
  getClientToken,
  checkout,
}