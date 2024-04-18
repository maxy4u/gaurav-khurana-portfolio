type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

type RequestInit = {
  headers: (HeadersInit & FetchOptions) | FetchOptions;
};

export const fetcher = <TData, TVariables>(query: string, variables?: TVariables, options?: RequestInit['headers']) => {
  return async (): Promise<TData> => {
    debugger;
    const { next, cache, ...restOptions } = options || {};
    const res = await fetch(`${process.env.host || ''}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...restOptions
      },
      body: JSON.stringify({ query, variables }),
      next,
      cache
    });
    debugger;
    const json = await res.json();
    debugger;

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
};
