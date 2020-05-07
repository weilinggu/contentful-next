import Head from "next/head";
import { contentfulClient } from '../../lib/contentful-client'
import React from 'react'
import LandingPage from '../../Components/Page/LandingPage'

function LandingPagePage(props) {
    // console.log(props.page)
    return (
        <div className="container">
      <Head>
        <title>{props.page.fields.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <React.Fragment>
          <div className="container grid-lg mt-2">
            <div className="columns">
                <LandingPage page={props.page} key={props.page.sys.id} />
            </div>
          </div>
        </React.Fragment>
      </main>
      </div>
    );
}

export async function getServerSideProps({ query }) {
    const { landingpageId } = query
    let page = {}
    // console.log(landingpageId)
  
    //@todo use getEntry
    const entries = await contentfulClient.getEntries({
      'fields.slug': landingpageId,
      'content_type': 'marketingLandingPage',
      include: 3
    })
    entries.items.forEach(function (entry) {
          if (entry) {
            page = entry
          }
        })
    // console.log(product)
    return { props: { page } }
  }
  
  export default LandingPagePage