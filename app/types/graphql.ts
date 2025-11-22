/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Users;
  register: TokenData;
};


export type MutationLoginArgs = {
  loginRequest: LoginDto;
};


export type MutationRegisterArgs = {
  registerRequest: RegisterDto;
};

export type Query = {
  __typename?: 'Query';
  sayHello: Scalars['String']['output'];
};

export type RegisterDto = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type TokenData = {
  __typename?: 'TokenData';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type UserMetadata = {
  __typename?: 'UserMetadata';
  avatar_url?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  email_verified: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  iss: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone_verified: Scalars['Boolean']['output'];
  user_id: Scalars['String']['output'];
};

export type UserProfiles = {
  __typename?: 'UserProfiles';
  avatar_url?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Users = {
  __typename?: 'Users';
  authenticated: Scalars['Boolean']['output'];
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updated_at: Scalars['DateTime']['output'];
  user_id: Scalars['String']['output'];
  user_metadata?: Maybe<UserMetadata>;
  user_profile?: Maybe<UserProfiles>;
};
