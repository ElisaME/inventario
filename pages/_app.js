import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/login') || router.pathname.startsWith('/signup')) {
    return (
      <Component {...pageProps} />
    )
  }

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
