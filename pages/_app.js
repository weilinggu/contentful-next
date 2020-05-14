import '../styles/global.css'
import { Container } from "next/app";

export default function App({ Component, pageProps }) {
  return ( <Container>
    <Component {...pageProps} />
  </Container>)
}


App.getInitialProps = async({ Component, router, ctx })=> {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}
