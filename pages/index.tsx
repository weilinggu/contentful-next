import withApollo from '../lib/with-apollo'
import Link from 'next/link'
import { useViewerQuery } from '../lib/viewer.graphql'
import { useEntryQuery } from '../lib/entry.graphql'

// Original Project Imports:

import Head from "next/head";
import React from 'react'

const Index = () => {
  const { data } = useViewerQuery()

  if (data) {
    const { viewer } = data
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
                {/*productsComponents*/}
                <div>
                  You're signed in as {viewer.name} and you're {viewer.status} goto{' '}
                  <Link href="/about">
                    <a>static</a>
                  </Link>{' '}
                page.
                </div>
              </div>
            </div>
          </React.Fragment>
        </main>
      </div>

    )
  }

  return <div>...</div>
}

export default withApollo(Index)
