import { useEffect, useState, PropsWithChildren } from 'react'
import { ApolloClient, NormalizedCacheObject, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { LinearProgress } from '@mui/material'

interface Props extends PropsWithChildren {
  apiUrl?: string
  apiSecret?: string
}

export function ApiProvider(props: Readonly<Props>) {
  const [apolloClient, setApolloClient] = useState<ApolloClient<NormalizedCacheObject>>()
  const { apiUrl, apiSecret } = props

  useEffect(() => {
    if (!apolloClient && apiUrl && apiSecret) {
      setApolloClient(
        new ApolloClient({
          link: createHttpLink({
            uri: apiUrl,
            headers: {
              'content-type': 'application/json',
              'x-hasura-admin-secret': apiSecret,
            },
          }),
          cache: new InMemoryCache(),
        })
      )
    }
  }, [apolloClient, apiUrl, apiSecret])

  if (!apolloClient) {
    return (
      <div>
        <LinearProgress />
      </div>
    )
  }

  return <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
}
