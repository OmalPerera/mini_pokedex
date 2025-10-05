import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { RetryLink } from '@apollo/client/link/retry'

export const createApolloLinks = (uri: string) => {
  const retryLink = new RetryLink({
    delay: {
      initial: 300,
      max: 2000,
      jitter: true,
    },
    attempts: {
      max: 5,
    },
  })

  const httpLink = new HttpLink({
    fetch: fetch,
    uri,
  })

  return ApolloLink.from([retryLink, httpLink])
}

export const createApolloClient = (link: ApolloLink) => {
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
}
