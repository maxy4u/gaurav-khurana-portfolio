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
    const environment = process.env.NODE_ENV || 'development';
    const url =
      environment == 'development' ? process.env.NEXT_PUBLIC_DEV_HOST_URL : process.env.NEXT_PUBLIC_PROD_HOST_URL;
    console.log('*Fetching*', url);
    console.log(
      '*HOST*',
      process.env.NODE_ENV,
      process.env.NEXT_PUBLIC_DEV_HOST_URL,
      process.env.NEXT_PUBLIC_PROD_HOST_URL
    );
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
