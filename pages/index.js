import Head from "next/head";
import { contentfulClient } from '../lib/contentful-client'
import React from 'react'
import ProductPage from '../Components/Page/ProductPage'

export default function Home(props) {
  let productsComponents = []
  props.allProducts.forEach(product => {
    product.fields.productBlock.fields.style = 'card'
    productsComponents.push(<ProductPage product={product} key={product.sys.id} productOnly/>)
  })
  return (
    <div className="container">
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <React.Fragment>
          <div className="container grid-lg mt-2">
            <div className="columns">
              {/* {products &&
                products.map(product => (
                  <ProductPage product={product} key={product.sys.id} />
                ))} */}
                {productsComponents}
            </div>
          </div>
        </React.Fragment>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  // Get every entries in contentful from type Article, sorted by date.
  // article is the ID of the content model we created on the dashboard.
  const entries = await contentfulClient.getEntries({
    content_type: "productPage",
    include: 5
  });

  return { allProducts: entries.items };
};