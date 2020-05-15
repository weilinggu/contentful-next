import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateCustomer from '../Components/Checkout/CreateCustomer'
import GenerateAccessToken from '../Components/Checkout/GenerateAccessToken'
import CreateCustomerCart from '../Components/Checkout/CreateCustomerCart'
import AddProductToCart from '../Components/Checkout/AddProductToCart'
import SetShippingAddressOnCart from '../Components/Checkout/SetShippingAddressOnCart'
import CreateGuestCart from '../Components/Checkout/CreateGuestCart'
import SetShippingAddressFromExisting from '../Components/Checkout/SetShippingAddressFromExisting'
import SetBillingAddressFromExisting from '../Components/Checkout/SetBillingAddressFromExisting'
import AddShippingMethodOnCart from '../Components/Checkout/AddShippingMethodOnCart'
import GetPaymentMethodsForCart from '../Components/Checkout/GetPaymentMethodsForCart'
import SetPaymentMethodForCart from '../Components/Checkout/SetPaymentMethodForCart'
import PlaceOrder from '../Components/Checkout/PlaceOrder'


export default () => {
  return (
    <div>
      <h1>Checkout POC</h1>
      <p>You can use this page to manually perform steps required by checkout:</p>
      <ul>
        <li>Create a customer</li>
        <li>Generate a customer access token</li>
        <li>Create a customer cart</li>
        <li>Add a product to the cart</li>
        <li>Set the shipping address on the cart</li>
        <li>More to come!</li>
      </ul>

      <CreateCustomer />
      <GenerateAccessToken />
      <CreateCustomerCart />
      <CreateGuestCart />
      <AddProductToCart />
      <SetShippingAddressOnCart />
      <SetShippingAddressFromExisting />
      <SetBillingAddressFromExisting />
      <AddShippingMethodOnCart />
      <GetPaymentMethodsForCart />
      <SetPaymentMethodForCart />
      <PlaceOrder />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}
