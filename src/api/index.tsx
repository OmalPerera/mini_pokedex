import { ApolloProvider } from '@apollo/client/react'
import React, { FC, PropsWithChildren } from 'react'
import { SERVER_URL } from '../utils'
import { createApolloClient, createApolloLinks } from './apollo-client'

const client = createApolloClient(createApolloLinks(SERVER_URL))

export const PokemonApolloProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
