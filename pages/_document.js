import Document, { Head, Main, NextScript } from "next/document";
import * as React from "react";
import { GtagNoscript, GtagScript } from "../tags/gtag";

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <GtagScript />
        </Head>
        <body>
          <GtagNoscript />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Render app and page and get the context of the page with collected side effects.
  let pageContext;

  // @ts-ignore
  const page = ctx.renderPage(Component => {
    return props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };
  });

  let css;

  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,
    styles: (
<style/>
    )
  };
};

export default MyDocument;
