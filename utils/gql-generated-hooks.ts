import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { fetcher } from '../remote/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

type RequestInit = {
  headers: (HeadersInit & FetchOptions) | FetchOptions;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type Experience = {
  __typename?: 'Experience';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  published?: Maybe<Scalars['Boolean']['output']>;
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  skills?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Owner = {
  __typename?: 'Owner';
  avatar_url?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getRepo: Repository;
  getRepos?: Maybe<Array<Maybe<Repository>>>;
  getResume?: Maybe<Resume>;
  getUser: User;
};

export type QueryGetRepoArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetUserArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Repository = {
  __typename?: 'Repository';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Owner>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Resume = {
  __typename?: 'Resume';
  resume: Array<Experience>;
};

export type Roles = {
  __typename?: 'Roles';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  exp: Experience;
  expid?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User = {
  __typename?: 'User';
  avatar_url?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Array<Maybe<Experience>>>;
  id: Scalars['ID']['output'];
  login?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pwd?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type GetRepositoriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetRepositoriesQuery = {
  __typename?: 'Query';
  getRepos?: Array<{
    __typename?: 'Repository';
    id?: string | null;
    name?: string | null;
    url?: string | null;
    description?: string | null;
    owner?: { __typename?: 'Owner'; avatar_url?: string | null; login?: string | null } | null;
  } | null> | null;
};

export const GetRepositoriesDocument = `
    query GetRepositories {
  getRepos {
    id
    name
    owner {
      avatar_url
      login
    }
    url
    description
  }
}
    `;

export const useGetRepositoriesQuery = <TData = GetRepositoriesQuery, TError = unknown>(
  variables?: GetRepositoriesQueryVariables,
  options?: Omit<UseQueryOptions<GetRepositoriesQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<GetRepositoriesQuery, TError, TData>['queryKey'];
  }
) => {
  return useQuery<GetRepositoriesQuery, TError, TData>({
    queryKey: variables === undefined ? ['GetRepositories'] : ['GetRepositories', variables],
    queryFn: fetcher<GetRepositoriesQuery, GetRepositoriesQueryVariables>(GetRepositoriesDocument, variables),
    ...options
  });
};

useGetRepositoriesQuery.getKey = (variables?: GetRepositoriesQueryVariables) =>
  variables === undefined ? ['GetRepositories'] : ['GetRepositories', variables];

export const useSuspenseGetRepositoriesQuery = <TData = GetRepositoriesQuery, TError = unknown>(
  variables?: GetRepositoriesQueryVariables,
  options?: Omit<UseSuspenseQueryOptions<GetRepositoriesQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseSuspenseQueryOptions<GetRepositoriesQuery, TError, TData>['queryKey'];
  }
) => {
  return useSuspenseQuery<GetRepositoriesQuery, TError, TData>({
    queryKey: variables === undefined ? ['GetRepositoriesSuspense'] : ['GetRepositoriesSuspense', variables],
    queryFn: fetcher<GetRepositoriesQuery, GetRepositoriesQueryVariables>(GetRepositoriesDocument, variables),
    ...options
  });
};

useSuspenseGetRepositoriesQuery.getKey = (variables?: GetRepositoriesQueryVariables) =>
  variables === undefined ? ['GetRepositoriesSuspense'] : ['GetRepositoriesSuspense', variables];

useGetRepositoriesQuery.fetcher = (variables?: GetRepositoriesQueryVariables, options?: RequestInit['headers']) =>
  fetcher<GetRepositoriesQuery, GetRepositoriesQueryVariables>(GetRepositoriesDocument, variables, options);
