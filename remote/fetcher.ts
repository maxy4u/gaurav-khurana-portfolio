type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

type RequestInit = {
  headers: (HeadersInit & FetchOptions) | FetchOptions;
};

export const fetcher = <TData, TVariables>(query: string, variables?: TVariables, options?: RequestInit['headers']) => {
  return async (): Promise<TData> => {
    const { next, cache, ...restOptions } = options || {};
    const url = process.env.NODE_ENV === 'development' ? process.env.DEV_HOST_URL : process.env.PROD_HOST_URL;
    console.log('*Fetching*', url);
    const res = await fetch(`${url}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...restOptions
      },
      body: JSON.stringify({ query, variables }),
      next,
      cache
    });
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
};
