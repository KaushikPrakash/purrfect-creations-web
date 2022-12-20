/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type Order = {
  __typename?: 'Order';
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  order_id: Scalars['ID'];
  order_placed?: Maybe<Scalars['String']>;
  order_status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  product_name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  ordersInProgress: Scalars['Int'];
  recentOrders: Array<Maybe<Order>>;
  totalOrders: Scalars['Int'];
  totalOrdersByMonth: Scalars['Int'];
  totalRevenue: Scalars['Int'];
  totalRevenueByMonthAndYear: Array<Maybe<TotalRevenueByMonthType>>;
};


export type QueryRecentOrdersArgs = {
  numOrders: Scalars['Int'];
};


export type QueryTotalOrdersByMonthArgs = {
  selectedDate: Scalars['Date'];
};

export type TotalRevenueByMonthType = {
  __typename?: 'TotalRevenueByMonthType';
  month: Scalars['String'];
  revenue: Scalars['Float'];
  year: Scalars['String'];
};

export type DashboardQueryQueryVariables = Exact<{
  numOrders: Scalars['Int'];
  selectedDate: Scalars['Date'];
}>;


export type DashboardQueryQuery = { __typename?: 'Query', ordersInProgress: number, totalOrders: number, totalRevenue: number, totalOrdersByMonth: number, recentOrders: Array<{ __typename?: 'Order', address?: string | null, email?: string | null, first_name?: string | null, last_name?: string | null, order_id: string, order_placed?: string | null, order_status?: string | null, price?: number | null, product_name?: string | null } | null>, totalRevenueByMonthAndYear: Array<{ __typename?: 'TotalRevenueByMonthType', month: string, revenue: number, year: string } | null> };


export const DashboardQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DashboardQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numOrders"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"selectedDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentOrders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"numOrders"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numOrders"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"order_id"}},{"kind":"Field","name":{"kind":"Name","value":"order_placed"}},{"kind":"Field","name":{"kind":"Name","value":"order_status"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"product_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ordersInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"totalOrders"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenueByMonthAndYear"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"revenue"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalOrdersByMonth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"selectedDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"selectedDate"}}}]}]}}]} as unknown as DocumentNode<DashboardQueryQuery, DashboardQueryQueryVariables>;