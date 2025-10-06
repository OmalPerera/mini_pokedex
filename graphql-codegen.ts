import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/schema.graphql',
  documents: ['src/**/*.gql'],
  generates: {
    'src/api/types.ts': {
      plugins: ['typescript'],
      config: {
        maybeValue: 'T',
        strictScalars: true,
        arrayInputType: 'array',
        scalars: {
          Time: 'string',
          JSON: 'Record<string, unknown>',
          jsonb: 'Record<string, unknown>',
        },
      },
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'api/types',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        maybeValue: 'T',
        withHooks: true,
        dedupeOperationSuffix: true,
        strictScalars: true,
        arrayInputType: 'array',
        documentMode: 'graphQLTag',
        useResultType: 'ApolloReactHooks.QueryResult',
        importBaseTypesFrom: '@apollo/client/react',
        apolloReactHooksImportFrom: '@apollo/client/react',
        scalars: {
          Time: 'string',
          JSON: 'Record<string, unknown>',
          jsonb: 'Record<string, unknown>',
        },
      },
    },
  },
  hooks: {afterAllFileWrite: ['npx prettier --write', 'npx eslint --fix']},
}

export default config
