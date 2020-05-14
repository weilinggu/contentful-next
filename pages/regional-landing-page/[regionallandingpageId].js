import Head from "next/head";
import { contentfulClient } from "../../lib/contentful-client";
import React from "react";
import LandingPage from "../../Components/Page/LandingPage";

function RegionalLandingPagePage(props) {
  // @todo CLEANUP
  let landingPage = <p>Page not available in this region</p>
  let title = null
  if (props.page instanceof Object && Object.keys(props.page).length != 0) {
    console.log(props.page)
    title = <title>{props.page.fields.title}</title>
    landingPage = <LandingPage page={props.page} key={props.page.sys.id} />
  }
  return (
    <div className="container">
      <Head>
        {title}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <React.Fragment>
          <div className="container grid-lg mt-2">
            <div className="columns">
              {landingPage}
            </div>
          </div>
        </React.Fragment>
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { regionallandingpageId } = ctx.query;
  let page = {};
  let lang = "en-US";
  let country = 'US';
  const host = ctx.req.headers.host;
  switch (host) {
    case "coravinlocal.ca:3000":
      country = "Canada"
      lang = "en-US";
      break;

    case "coravinlocal.fr:3000":
      country = "France"
      lang = "fr";
      break;

    case "coravinlocal.com:3000":
      country = "US"
      lang = "en-US";
      break;
  }

  //@todo use getEntry
  const entries = await contentfulClient.getEntries({
    "fields.slug": regionallandingpageId,
    content_type: "regionalLandingPage",
    locale: lang,
    include: 3
  });
  entries.items.forEach(function(entry) {
    if (entry) {
      page = entry;
    }
  });
  let doRender = false
  if (page.fields.regions) {
    page.fields.regions.forEach(function(region) {
      if (country === region.fields.countryName) {
        doRender = true
      }
    })
  }
  if (!doRender) {
    page = []
  }
  return { props: { page } };
}

export default RegionalLandingPagePage;
