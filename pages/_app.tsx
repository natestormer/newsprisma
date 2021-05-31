import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../utils/apolloClient"

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialAplolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
