import axios from "axios"

const graphQlEndpoint = "https://stagingm232-na.coravin.com/graphql"

export const getCurrencyCodes = async () => {
  return await axios.post('https://stagingm232-na.coravin.com/graphql', {
    query: /* GraphQL */`
      query {
        currency {
          base_currency_code
        }
      }
    `
  })
}

export const createCustomer = async (options) => {
  return await axios.post('https://stagingm232-na.coravin.com/graphql', {
    variables: options,
    query: /* GraphQL */`
      mutation($firstName:String!, $lastName:String!, $email:String!, $password:String!, $isSubscribed:Boolean!) {
        createCustomer(
          input: {
            firstname: $firstName
            lastname: $lastName
            email: $email
            password: $password
            is_subscribed: $isSubscribed
          }
        ) {
          customer {
            firstname
            lastname
            email
            is_subscribed
          }
        }
      }
    `,
  })
}

export const generateCustomerToken = async (email, password) => {
  return await axios.post(graphQlEndpoint, {
    query: /* GraphQL */`
      mutation {
        generateCustomerToken(email: "${email}", password: "${password}") {
          token
        }
      }
    `
  })
}

export const createCart = async (accessToken) => {
  return await axios.post(graphQlEndpoint, {
    query: /* GraphQL */`
      {
        customerCart {
          id
        }
      }
    `
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const createGuestCart = async () => {
  return await axios.post(graphQlEndpoint, {
    query: /* GraphQL */`
      mutation {
        createEmptyCart
      }
    `
  })
}

export const addSimpleProductToCart = async (accessToken, options) => {
  return await axios.post(graphQlEndpoint, {
    variables: options,
    query: /* GraphQL */`
      mutation($cartId:String!, $sku:String!, $quantity:Float!) {
        addSimpleProductsToCart(
          input: {
            cart_id: $cartId
            cart_items: [
              {
                data: {
                  quantity: $quantity
                  sku: $sku
                }
              }
            ]
          }
        ) {
          cart {
            items {
              id
              product {
                sku
                stock_status
              }
              quantity
            }
          }
        }
      }
    `
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const addVirtualProductToCart = async () => {
  // TODO: Implement, but it seems Coravin has no virtual products
}

export const setShippingAddressOnCart = async (accessToken, options) => {
  return await axios.post(graphQlEndpoint, {
    variables: options,
    query: /* GraphQL */`
      mutation(
        $cartId: String!,
        $firstName: String!,
        $lastName: String!,
        $company: String!,
        $street: [String]!,
        $city: String!,
        $region: String!,
        $postCode: String!,
        $countryCode: String!,
        $telephone: String!,
        $saveInAddressBook: Boolean!)
      {
        setShippingAddressesOnCart(
          input: {
            cart_id: $cartId
            shipping_addresses: [
              {
                address: {
                  firstname: $firstName
                  lastname: $lastName
                  company: $company
                  street: $street
                  city: $city
                  region: $region
                  postcode: $postCode
                  country_code: $countryCode
                  telephone: $telephone
                  save_in_address_book: $saveInAddressBook
                }
              }
            ]
          }
        ) {
          cart {
            shipping_addresses {
              firstname
              lastname
              company
              street
              city
              region {
                code
                label
              }
              postcode
              telephone
              country {
                code
                label
              }
            }
          }
        }
      }
    `
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const getCustomerAddresses = async (accessToken) => {
  return await axios.post(graphQlEndpoint, {
    query: /* GraphQL */`
      query {
        customer {
          addresses {
            id
            default_billing
            default_shipping
            street
            city
          }
        }
      }
    `
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const addShippingAddressFromExistingAddress = async (accessToken, config) => {
  return await axios.post(graphQlEndpoint, {
    variables: config,
    query: /* GraphQL */`
      mutation($cartId: String!, $addressId: Int!) {
        setShippingAddressesOnCart(
          input: {
            cart_id: $cartId
            shipping_addresses: {
                customer_address_id: $addressId
            }
          }
        ) {
          cart {
            shipping_addresses {
              firstname
              lastname
              company
              street
              city
              region {
                code
                label
              }
              postcode
              telephone
              country
              {
                code
                label
              }
            }
          }
        }
      }
    `
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const addNewBillingAddress = async () => {
  // TODO: Implement
}

export const addNewShippingAndBillingAddress = async () => {
  // TODO: Implement
}

export const addBillingAddressFromExistingAddress = async (accessToken, config) => {
  return await axios.post(graphQlEndpoint, {
    variables: config,
    query: /* GraphQL */`
      mutation($cartId: String!, $addressId: Int!) {
        setBillingAddressOnCart(
          input: {
            cart_id: $cartId
            billing_address: {
                customer_address_id: $addressId
            }
          }
        ) {
          cart {
            billing_address {
              firstname
              lastname
              company
              street
              city
              region {
                code
                label
              }
              postcode
              telephone
              country
              {
                code
                label
              }
            }
          }
        }
      }
    `
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}