import { Layout } from '@/components/Layout/Layout'
import '@/styles/globals.css'
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  )
}
