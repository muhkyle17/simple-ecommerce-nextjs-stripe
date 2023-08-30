import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { CartProvider } from 'use-shopping-cart'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider
      mode='payment'
      cartMode='client-only'
      // Connect to stripe account
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      // Redirects here after successful payments
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
      // Redirects here when you click back on Stripe Checkout
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
      currency='CAD'
      // Only customer from Canada will be able to purchase
      // Having this setting means that we will capture shipping address
      allowedCountries={['CA']}
      // Enables local storage
      shouldPersist={true}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}
