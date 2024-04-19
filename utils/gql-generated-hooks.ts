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
  Date: { input: any; output: any };
};

export type Experience = {
  __typename?: 'Experience';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  role?: Maybe<Array<Maybe<Roles>>>;
  skills?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['Date']['output']>;
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
  getUser?: Maybe<User>;
  getUserExperience?: Maybe<Array<Maybe<User>>>;
};

export type QueryGetRepoArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetUserArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetUserExperienceArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  pwd?: InputMaybe<Scalars['String']['input']>;
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
  resume?: Maybe<Array<Maybe<Experience>>>;
};

export type Roles = {
  __typename?: 'Roles';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  exp?: Maybe<Experience>;
  expid?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Array<Maybe<Experience>>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pwd?: Maybe<Scalars['String']['output']>;
};

export type RoleFragment = { __typename?: 'Roles'; id?: string | null; expid?: number | null; content?: string | null };

export type ExperienceFragment = {
  __typename?: 'Experience';
  id?: number | null;
  title?: string | null;
  company?: string | null;
  start?: any | null;
  end?: any | null;
  desc?: string | null;
  skills?: string | null;
  published?: boolean | null;
  authorId?: number | null;
  role?: Array<{
    __typename?: 'Roles';
    id?: string | null;
    expid?: number | null;
    content?: string | null;
  } | null> | null;
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

export type GetUserExperienceQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  pwd?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetUserExperienceQuery = {
  __typename?: 'Query';
  getUserExperience?: Array<{
    __typename?: 'User';
    id?: string | null;
    email?: string | null;
    exp?: Array<{
      __typename?: 'Experience';
      id?: number | null;
      title?: string | null;
      company?: string | null;
      start?: any | null;
      end?: any | null;
      desc?: string | null;
    } | null> | null;
  } | null> | null;
};

export const RoleFragmentDoc = `
    fragment role on Roles {
  id
  expid
  content
}
    `;
export const ExperienceFragmentDoc = `
    fragment experience on Experience {
  id
  title
  company
  start
  end
  desc
  role {
    id
    expid
    content
  }
  skills
  published
  authorId
}
    `;
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

export const GetUserExperienceDocument = `
    query GetUserExperience($email: String, $pwd: String) {
  getUserExperience(email: $email, pwd: $pwd) {
    id
    email
    exp {
      id
      title
      company
      start
      end
      desc
    }
  }
}
    `;

export const useGetUserExperienceQuery = <TData = GetUserExperienceQuery, TError = unknown>(
  variables?: GetUserExperienceQueryVariables,
  options?: Omit<UseQueryOptions<GetUserExperienceQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<GetUserExperienceQuery, TError, TData>['queryKey'];
  }
) => {
  return useQuery<GetUserExperienceQuery, TError, TData>({
    queryKey: variables === undefined ? ['GetUserExperience'] : ['GetUserExperience', variables],
    queryFn: fetcher<GetUserExperienceQuery, GetUserExperienceQueryVariables>(GetUserExperienceDocument, variables),
    ...options
  });
};

useGetUserExperienceQuery.getKey = (variables?: GetUserExperienceQueryVariables) =>
  variables === undefined ? ['GetUserExperience'] : ['GetUserExperience', variables];

export const useSuspenseGetUserExperienceQuery = <TData = GetUserExperienceQuery, TError = unknown>(
  variables?: GetUserExperienceQueryVariables,
  options?: Omit<UseSuspenseQueryOptions<GetUserExperienceQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseSuspenseQueryOptions<GetUserExperienceQuery, TError, TData>['queryKey'];
  }
) => {
  return useSuspenseQuery<GetUserExperienceQuery, TError, TData>({
    queryKey: variables === undefined ? ['GetUserExperienceSuspense'] : ['GetUserExperienceSuspense', variables],
    queryFn: fetcher<GetUserExperienceQuery, GetUserExperienceQueryVariables>(GetUserExperienceDocument, variables),
    ...options
  });
};

useSuspenseGetUserExperienceQuery.getKey = (variables?: GetUserExperienceQueryVariables) =>
  variables === undefined ? ['GetUserExperienceSuspense'] : ['GetUserExperienceSuspense', variables];

useGetUserExperienceQuery.fetcher = (variables?: GetUserExperienceQueryVariables, options?: RequestInit['headers']) =>
  fetcher<GetUserExperienceQuery, GetUserExperienceQueryVariables>(GetUserExperienceDocument, variables, options);
