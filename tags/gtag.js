import * as React from "react";
import {useState, useEffect} from "react"
import { Head} from "next/document";

// This will break during SSR builds if we don't put {loaded &&} in place to wait for the script
const GA_TRACKING_ID = "GTM-NCRCBT5";
export const GtagScript = () => {
  function intercept() {
    const qs = document.querySelector("#gtm-js");
    if (qs !== null) {
      qs.addEventListener("load", () => {
        console.log("GTM loaded");
      });
    }
  }
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
}, []);

  return (
    <>
     {<Head>
            <script
                id="gtm-js"
                async
                src={`https://www.googletagmanager.com/gtm.js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
        `
                }}/>
        </Head>}
    </>
  );
};
const style = {
  display: "none",
  visibility: "hidden"
};
export const GtagNoscript = props => (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
        height="0"
        width="0"
        style={style}
      />
    </noscript>
);
