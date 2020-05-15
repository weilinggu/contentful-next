import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateCustomer from '../Components/Checkout/CreateCustomer'
import GenerateAccessToken from '../Components/Checkout/GenerateAccessToken'
import CreateCustomerCart from '../Components/Checkout/CreateCustomerCart'
import AddProductToCart from '../Components/Checkout/AddProductToCart'
import SetShippingAddressOnCart from '../Components/Checkout/SetShippingAddressOnCart'
import SetShippingAddressFromExisting from '../Components/Checkout/SetShippingAddressFromExisting'
import SetBillingAddressFromExisting from '../Components/Checkout/SetBillingAddressFromExisting'
import AddShippingMethodOnCart from '../Components/Checkout/AddShippingMethodOnCart'
import SetPaymentMethodForCart from '../Components/Checkout/SetPaymentMethodForCart'
import PlaceOrder from '../Components/Checkout/PlaceOrder'


export default () => {
  return (
    <div>
      <h1>Checkout POC</h1>
      <p>You can use this page to manually perform steps required for a checkout in Magento</p>
      <CreateCustomer />
      <GenerateAccessToken />
      <CreateCustomerCart />
      <AddProductToCart />
      <SetShippingAddressOnCart />
      <SetShippingAddressFromExisting />
      <SetBillingAddressFromExisting />
      <AddShippingMethodOnCart />
      <SetPaymentMethodForCart />
      <PlaceOrder />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}
