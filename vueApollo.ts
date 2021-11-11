import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  votes?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
};

export type CurrentUserForProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserForProfileQuery = { __typename?: 'Query', author: { __typename?: 'Author', firstName?: string | null | undefined, lastName?: string | null | undefined } };


export const CurrentUserForProfileDocument = gql`
    query CurrentUserForProfile {
  author {
    firstName
    lastName
  }
}
    `;

/**
 * __useCurrentUserForProfileQuery__
 *
 * To run a query within a Vue component, call `useCurrentUserForProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserForProfileQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCurrentUserForProfileQuery();
 */
export function useCurrentUserForProfileQuery(options: VueApolloComposable.UseQueryOptions<CurrentUserForProfileQuery, CurrentUserForProfileQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CurrentUserForProfileQuery, CurrentUserForProfileQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CurrentUserForProfileQuery, CurrentUserForProfileQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CurrentUserForProfileQuery, CurrentUserForProfileQueryVariables>(CurrentUserForProfileDocument, {}, options);
}
export type CurrentUserForProfileQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CurrentUserForProfileQuery, CurrentUserForProfileQueryVariables>;