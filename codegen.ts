import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // Where your GQL schema is located (could also be externally hosted)
  //schema: 'pages/api/graphql.ts',
  schema: [
    {
      'pages/api/graphql.ts': {
        noRequire: true
      }
    }
  ],
  overwrite: true,
  documents: 'graphql/**/*.graphql',
  generates: {
    // Where the generated types and hooks file will be placed
    './utils/gql-generated-hooks.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        // Important! The "add" plugin will inject this into our generated file.
        // This extends RequestInit['Headers'] to include the Next.js extended "fetch"
        // options for caching. This will allow for fine grained cache control
        // with our generated hooks.
        {
          add: {
            content: `
type FetchOptions = {
cache?: RequestCache;
next?: NextFetchRequestConfig;
};

            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };`
          }
        }
      ],
      config: {
        // Needed to support the updated React Query 5 API
        reactQueryVersion: 5,
        legacyMode: false,
        exposeFetcher: true,
        exposeQueryKeys: true,
        addSuspenseQuery: true,
        // Allows us to specify a custom fetcher function that will leverage
        // Next.js caching fetaures within our generated query hooks.
        fetcher: '../remote/fetcher#fetcher'
      }
    }
  },
  require: 'ts-node/register/transpile-only'
};
export default config;
