import Head from "next/head";
import { contentfulClient } from '../../lib/contentful-client'
import React from 'react'
import ProductComponent from '../../Components/ProductComponent'
import ProductBlock from '../../Components/ProductBlock'
import ProductPage from '../../Components/ProductPage'

function Product(props) {
    // console.log(props.product)
    return (
        <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <React.Fragment>
          <div className="container grid-lg mt-2">
            <div className="columns">
                <ProductPage product={props.product} key={props.product.fields.pageTitle} />
            </div>
          </div>
        </React.Fragment>
      </main>
      </div>
    );
}

export async function getServerSideProps({ query }) {
    const { productId } = query
    let product = {}
  
    //@todo use getEntry
    const entries = await contentfulClient.getEntries({
      'fields.slug': productId,
      'content_type': 'productPage',
      include: 3
    })
    entries.items.forEach(function (entry) {
          if (entry) {
            product = entry
          }
        })
    // console.log(product)
    return { props: { product } }
  }
  
  export default Product