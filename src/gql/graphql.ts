/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  articles?: Maybe<ArticlesAccess>;
  canAccessAdmin: Scalars['Boolean']['output'];
  comments?: Maybe<CommentsAccess>;
  media?: Maybe<MediaAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  users?: Maybe<UsersAccess>;
};

export type Article = {
  __typename?: 'Article';
  comments?: Maybe<Array<Comment>>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image: Media;
  preview: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleImageArgs = {
  where?: InputMaybe<Article_Image_Where>;
};

export type Article_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Article_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Article_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Article_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Image_Where_Or>>>;
  alt?: InputMaybe<Article_Image_Alt_Operator>;
  createdAt?: InputMaybe<Article_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Article_Image_Filename_Operator>;
  filesize?: InputMaybe<Article_Image_Filesize_Operator>;
  focalX?: InputMaybe<Article_Image_FocalX_Operator>;
  focalY?: InputMaybe<Article_Image_FocalY_Operator>;
  height?: InputMaybe<Article_Image_Height_Operator>;
  id?: InputMaybe<Article_Image_Id_Operator>;
  mimeType?: InputMaybe<Article_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Article_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Article_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Article_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Article_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Article_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Article_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Article_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Article_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Article_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Article_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Article_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Article_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Article_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Article_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Article_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Article_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Article_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Article_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Article_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Article_Image_Url_Operator>;
  width?: InputMaybe<Article_Image_Width_Operator>;
};

export type Article_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Article_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Image_Where_Or>>>;
  alt?: InputMaybe<Article_Image_Alt_Operator>;
  createdAt?: InputMaybe<Article_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Article_Image_Filename_Operator>;
  filesize?: InputMaybe<Article_Image_Filesize_Operator>;
  focalX?: InputMaybe<Article_Image_FocalX_Operator>;
  focalY?: InputMaybe<Article_Image_FocalY_Operator>;
  height?: InputMaybe<Article_Image_Height_Operator>;
  id?: InputMaybe<Article_Image_Id_Operator>;
  mimeType?: InputMaybe<Article_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Article_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Article_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Article_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Article_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Article_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Article_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Article_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Article_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Article_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Article_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Article_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Article_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Article_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Article_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Article_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Article_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Article_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Article_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Article_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Article_Image_Url_Operator>;
  width?: InputMaybe<Article_Image_Width_Operator>;
};

export type Article_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Article_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Image_Where_Or>>>;
  alt?: InputMaybe<Article_Image_Alt_Operator>;
  createdAt?: InputMaybe<Article_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Article_Image_Filename_Operator>;
  filesize?: InputMaybe<Article_Image_Filesize_Operator>;
  focalX?: InputMaybe<Article_Image_FocalX_Operator>;
  focalY?: InputMaybe<Article_Image_FocalY_Operator>;
  height?: InputMaybe<Article_Image_Height_Operator>;
  id?: InputMaybe<Article_Image_Id_Operator>;
  mimeType?: InputMaybe<Article_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Article_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Article_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Article_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Article_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Article_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Article_Image_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Article_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Article_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Article_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Article_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Article_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Article_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Article_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Article_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Article_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Article_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Article_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Article_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Article_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Article_Image_Url_Operator>;
  width?: InputMaybe<Article_Image_Width_Operator>;
};

export type Article_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Article_Comments_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Article_Content_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Article_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Article_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Article_Preview_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Article_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Article_Where = {
  AND?: InputMaybe<Array<InputMaybe<Article_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Where_Or>>>;
  comments?: InputMaybe<Article_Comments_Operator>;
  content?: InputMaybe<Article_Content_Operator>;
  createdAt?: InputMaybe<Article_CreatedAt_Operator>;
  id?: InputMaybe<Article_Id_Operator>;
  image?: InputMaybe<Article_Image_Operator>;
  preview?: InputMaybe<Article_Preview_Operator>;
  title?: InputMaybe<Article_Title_Operator>;
  updatedAt?: InputMaybe<Article_UpdatedAt_Operator>;
};

export type Article_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Article_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Where_Or>>>;
  comments?: InputMaybe<Article_Comments_Operator>;
  content?: InputMaybe<Article_Content_Operator>;
  createdAt?: InputMaybe<Article_CreatedAt_Operator>;
  id?: InputMaybe<Article_Id_Operator>;
  image?: InputMaybe<Article_Image_Operator>;
  preview?: InputMaybe<Article_Preview_Operator>;
  title?: InputMaybe<Article_Title_Operator>;
  updatedAt?: InputMaybe<Article_UpdatedAt_Operator>;
};

export type Article_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Article_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Where_Or>>>;
  comments?: InputMaybe<Article_Comments_Operator>;
  content?: InputMaybe<Article_Content_Operator>;
  createdAt?: InputMaybe<Article_CreatedAt_Operator>;
  id?: InputMaybe<Article_Id_Operator>;
  image?: InputMaybe<Article_Image_Operator>;
  preview?: InputMaybe<Article_Preview_Operator>;
  title?: InputMaybe<Article_Title_Operator>;
  updatedAt?: InputMaybe<Article_UpdatedAt_Operator>;
};

export type Articles = {
  __typename?: 'Articles';
  docs?: Maybe<Array<Maybe<Article>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ArticlesCreateAccess = {
  __typename?: 'ArticlesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesCreateDocAccess = {
  __typename?: 'ArticlesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesDeleteAccess = {
  __typename?: 'ArticlesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesDeleteDocAccess = {
  __typename?: 'ArticlesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesDocAccessFields = {
  __typename?: 'ArticlesDocAccessFields';
  comments?: Maybe<ArticlesDocAccessFields_Comments>;
  content?: Maybe<ArticlesDocAccessFields_Content>;
  createdAt?: Maybe<ArticlesDocAccessFields_CreatedAt>;
  image?: Maybe<ArticlesDocAccessFields_Image>;
  preview?: Maybe<ArticlesDocAccessFields_Preview>;
  title?: Maybe<ArticlesDocAccessFields_Title>;
  updatedAt?: Maybe<ArticlesDocAccessFields_UpdatedAt>;
};

export type ArticlesDocAccessFields_Comments = {
  __typename?: 'ArticlesDocAccessFields_comments';
  create?: Maybe<ArticlesDocAccessFields_Comments_Create>;
  delete?: Maybe<ArticlesDocAccessFields_Comments_Delete>;
  read?: Maybe<ArticlesDocAccessFields_Comments_Read>;
  update?: Maybe<ArticlesDocAccessFields_Comments_Update>;
};

export type ArticlesDocAccessFields_Comments_Create = {
  __typename?: 'ArticlesDocAccessFields_comments_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Comments_Delete = {
  __typename?: 'ArticlesDocAccessFields_comments_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Comments_Read = {
  __typename?: 'ArticlesDocAccessFields_comments_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Comments_Update = {
  __typename?: 'ArticlesDocAccessFields_comments_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Content = {
  __typename?: 'ArticlesDocAccessFields_content';
  create?: Maybe<ArticlesDocAccessFields_Content_Create>;
  delete?: Maybe<ArticlesDocAccessFields_Content_Delete>;
  read?: Maybe<ArticlesDocAccessFields_Content_Read>;
  update?: Maybe<ArticlesDocAccessFields_Content_Update>;
};

export type ArticlesDocAccessFields_Content_Create = {
  __typename?: 'ArticlesDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Content_Delete = {
  __typename?: 'ArticlesDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Content_Read = {
  __typename?: 'ArticlesDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Content_Update = {
  __typename?: 'ArticlesDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CreatedAt = {
  __typename?: 'ArticlesDocAccessFields_createdAt';
  create?: Maybe<ArticlesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ArticlesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ArticlesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ArticlesDocAccessFields_CreatedAt_Update>;
};

export type ArticlesDocAccessFields_CreatedAt_Create = {
  __typename?: 'ArticlesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ArticlesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CreatedAt_Read = {
  __typename?: 'ArticlesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CreatedAt_Update = {
  __typename?: 'ArticlesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Image = {
  __typename?: 'ArticlesDocAccessFields_image';
  create?: Maybe<ArticlesDocAccessFields_Image_Create>;
  delete?: Maybe<ArticlesDocAccessFields_Image_Delete>;
  read?: Maybe<ArticlesDocAccessFields_Image_Read>;
  update?: Maybe<ArticlesDocAccessFields_Image_Update>;
};

export type ArticlesDocAccessFields_Image_Create = {
  __typename?: 'ArticlesDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Image_Delete = {
  __typename?: 'ArticlesDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Image_Read = {
  __typename?: 'ArticlesDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Image_Update = {
  __typename?: 'ArticlesDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Preview = {
  __typename?: 'ArticlesDocAccessFields_preview';
  create?: Maybe<ArticlesDocAccessFields_Preview_Create>;
  delete?: Maybe<ArticlesDocAccessFields_Preview_Delete>;
  read?: Maybe<ArticlesDocAccessFields_Preview_Read>;
  update?: Maybe<ArticlesDocAccessFields_Preview_Update>;
};

export type ArticlesDocAccessFields_Preview_Create = {
  __typename?: 'ArticlesDocAccessFields_preview_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Preview_Delete = {
  __typename?: 'ArticlesDocAccessFields_preview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Preview_Read = {
  __typename?: 'ArticlesDocAccessFields_preview_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Preview_Update = {
  __typename?: 'ArticlesDocAccessFields_preview_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Title = {
  __typename?: 'ArticlesDocAccessFields_title';
  create?: Maybe<ArticlesDocAccessFields_Title_Create>;
  delete?: Maybe<ArticlesDocAccessFields_Title_Delete>;
  read?: Maybe<ArticlesDocAccessFields_Title_Read>;
  update?: Maybe<ArticlesDocAccessFields_Title_Update>;
};

export type ArticlesDocAccessFields_Title_Create = {
  __typename?: 'ArticlesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Title_Delete = {
  __typename?: 'ArticlesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Title_Read = {
  __typename?: 'ArticlesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Title_Update = {
  __typename?: 'ArticlesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_UpdatedAt = {
  __typename?: 'ArticlesDocAccessFields_updatedAt';
  create?: Maybe<ArticlesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ArticlesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ArticlesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ArticlesDocAccessFields_UpdatedAt_Update>;
};

export type ArticlesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ArticlesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ArticlesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ArticlesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ArticlesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields = {
  __typename?: 'ArticlesFields';
  comments?: Maybe<ArticlesFields_Comments>;
  content?: Maybe<ArticlesFields_Content>;
  createdAt?: Maybe<ArticlesFields_CreatedAt>;
  image?: Maybe<ArticlesFields_Image>;
  preview?: Maybe<ArticlesFields_Preview>;
  title?: Maybe<ArticlesFields_Title>;
  updatedAt?: Maybe<ArticlesFields_UpdatedAt>;
};

export type ArticlesFields_Comments = {
  __typename?: 'ArticlesFields_comments';
  create?: Maybe<ArticlesFields_Comments_Create>;
  delete?: Maybe<ArticlesFields_Comments_Delete>;
  read?: Maybe<ArticlesFields_Comments_Read>;
  update?: Maybe<ArticlesFields_Comments_Update>;
};

export type ArticlesFields_Comments_Create = {
  __typename?: 'ArticlesFields_comments_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Comments_Delete = {
  __typename?: 'ArticlesFields_comments_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Comments_Read = {
  __typename?: 'ArticlesFields_comments_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Comments_Update = {
  __typename?: 'ArticlesFields_comments_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Content = {
  __typename?: 'ArticlesFields_content';
  create?: Maybe<ArticlesFields_Content_Create>;
  delete?: Maybe<ArticlesFields_Content_Delete>;
  read?: Maybe<ArticlesFields_Content_Read>;
  update?: Maybe<ArticlesFields_Content_Update>;
};

export type ArticlesFields_Content_Create = {
  __typename?: 'ArticlesFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Content_Delete = {
  __typename?: 'ArticlesFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Content_Read = {
  __typename?: 'ArticlesFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Content_Update = {
  __typename?: 'ArticlesFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CreatedAt = {
  __typename?: 'ArticlesFields_createdAt';
  create?: Maybe<ArticlesFields_CreatedAt_Create>;
  delete?: Maybe<ArticlesFields_CreatedAt_Delete>;
  read?: Maybe<ArticlesFields_CreatedAt_Read>;
  update?: Maybe<ArticlesFields_CreatedAt_Update>;
};

export type ArticlesFields_CreatedAt_Create = {
  __typename?: 'ArticlesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CreatedAt_Delete = {
  __typename?: 'ArticlesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CreatedAt_Read = {
  __typename?: 'ArticlesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CreatedAt_Update = {
  __typename?: 'ArticlesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Image = {
  __typename?: 'ArticlesFields_image';
  create?: Maybe<ArticlesFields_Image_Create>;
  delete?: Maybe<ArticlesFields_Image_Delete>;
  read?: Maybe<ArticlesFields_Image_Read>;
  update?: Maybe<ArticlesFields_Image_Update>;
};

export type ArticlesFields_Image_Create = {
  __typename?: 'ArticlesFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Image_Delete = {
  __typename?: 'ArticlesFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Image_Read = {
  __typename?: 'ArticlesFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Image_Update = {
  __typename?: 'ArticlesFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Preview = {
  __typename?: 'ArticlesFields_preview';
  create?: Maybe<ArticlesFields_Preview_Create>;
  delete?: Maybe<ArticlesFields_Preview_Delete>;
  read?: Maybe<ArticlesFields_Preview_Read>;
  update?: Maybe<ArticlesFields_Preview_Update>;
};

export type ArticlesFields_Preview_Create = {
  __typename?: 'ArticlesFields_preview_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Preview_Delete = {
  __typename?: 'ArticlesFields_preview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Preview_Read = {
  __typename?: 'ArticlesFields_preview_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Preview_Update = {
  __typename?: 'ArticlesFields_preview_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Title = {
  __typename?: 'ArticlesFields_title';
  create?: Maybe<ArticlesFields_Title_Create>;
  delete?: Maybe<ArticlesFields_Title_Delete>;
  read?: Maybe<ArticlesFields_Title_Read>;
  update?: Maybe<ArticlesFields_Title_Update>;
};

export type ArticlesFields_Title_Create = {
  __typename?: 'ArticlesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Title_Delete = {
  __typename?: 'ArticlesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Title_Read = {
  __typename?: 'ArticlesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Title_Update = {
  __typename?: 'ArticlesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_UpdatedAt = {
  __typename?: 'ArticlesFields_updatedAt';
  create?: Maybe<ArticlesFields_UpdatedAt_Create>;
  delete?: Maybe<ArticlesFields_UpdatedAt_Delete>;
  read?: Maybe<ArticlesFields_UpdatedAt_Read>;
  update?: Maybe<ArticlesFields_UpdatedAt_Update>;
};

export type ArticlesFields_UpdatedAt_Create = {
  __typename?: 'ArticlesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_UpdatedAt_Delete = {
  __typename?: 'ArticlesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_UpdatedAt_Read = {
  __typename?: 'ArticlesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_UpdatedAt_Update = {
  __typename?: 'ArticlesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesReadAccess = {
  __typename?: 'ArticlesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesReadDocAccess = {
  __typename?: 'ArticlesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesUpdateAccess = {
  __typename?: 'ArticlesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesUpdateDocAccess = {
  __typename?: 'ArticlesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  article: Article;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Comment_Article_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Comment_Content_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Comment_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Comment_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Comment_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Comment_Where = {
  AND?: InputMaybe<Array<InputMaybe<Comment_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Comment_Where_Or>>>;
  article?: InputMaybe<Comment_Article_Operator>;
  content?: InputMaybe<Comment_Content_Operator>;
  createdAt?: InputMaybe<Comment_CreatedAt_Operator>;
  id?: InputMaybe<Comment_Id_Operator>;
  updatedAt?: InputMaybe<Comment_UpdatedAt_Operator>;
};

export type Comment_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Comment_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Comment_Where_Or>>>;
  article?: InputMaybe<Comment_Article_Operator>;
  content?: InputMaybe<Comment_Content_Operator>;
  createdAt?: InputMaybe<Comment_CreatedAt_Operator>;
  id?: InputMaybe<Comment_Id_Operator>;
  updatedAt?: InputMaybe<Comment_UpdatedAt_Operator>;
};

export type Comment_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Comment_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Comment_Where_Or>>>;
  article?: InputMaybe<Comment_Article_Operator>;
  content?: InputMaybe<Comment_Content_Operator>;
  createdAt?: InputMaybe<Comment_CreatedAt_Operator>;
  id?: InputMaybe<Comment_Id_Operator>;
  updatedAt?: InputMaybe<Comment_UpdatedAt_Operator>;
};

export type Comments = {
  __typename?: 'Comments';
  docs?: Maybe<Array<Maybe<Comment>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CommentsCreateAccess = {
  __typename?: 'CommentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CommentsCreateDocAccess = {
  __typename?: 'CommentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CommentsDeleteAccess = {
  __typename?: 'CommentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CommentsDeleteDocAccess = {
  __typename?: 'CommentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CommentsDocAccessFields = {
  __typename?: 'CommentsDocAccessFields';
  article?: Maybe<CommentsDocAccessFields_Article>;
  content?: Maybe<CommentsDocAccessFields_Content>;
  createdAt?: Maybe<CommentsDocAccessFields_CreatedAt>;
  updatedAt?: Maybe<CommentsDocAccessFields_UpdatedAt>;
};

export type CommentsDocAccessFields_Article = {
  __typename?: 'CommentsDocAccessFields_article';
  create?: Maybe<CommentsDocAccessFields_Article_Create>;
  delete?: Maybe<CommentsDocAccessFields_Article_Delete>;
  read?: Maybe<CommentsDocAccessFields_Article_Read>;
  update?: Maybe<CommentsDocAccessFields_Article_Update>;
};

export type CommentsDocAccessFields_Article_Create = {
  __typename?: 'CommentsDocAccessFields_article_Create';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_Article_Delete = {
  __typename?: 'CommentsDocAccessFields_article_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_Article_Read = {
  __typename?: 'CommentsDocAccessFields_article_Read';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_Article_Update = {
  __typename?: 'CommentsDocAccessFields_article_Update';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_Content = {
  __typename?: 'CommentsDocAccessFields_content';
  create?: Maybe<CommentsDocAccessFields_Content_Create>;
  delete?: Maybe<CommentsDocAccessFields_Content_Delete>;
  read?: Maybe<CommentsDocAccessFields_Content_Read>;
  update?: Maybe<CommentsDocAccessFields_Content_Update>;
};

export type CommentsDocAccessFields_Content_Create = {
  __typename?: 'CommentsDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_Content_Delete = {
  __typename?: 'CommentsDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_Content_Read = {
  __typename?: 'CommentsDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_Content_Update = {
  __typename?: 'CommentsDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_CreatedAt = {
  __typename?: 'CommentsDocAccessFields_createdAt';
  create?: Maybe<CommentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CommentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CommentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CommentsDocAccessFields_CreatedAt_Update>;
};

export type CommentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'CommentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CommentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'CommentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'CommentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_UpdatedAt = {
  __typename?: 'CommentsDocAccessFields_updatedAt';
  create?: Maybe<CommentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CommentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CommentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CommentsDocAccessFields_UpdatedAt_Update>;
};

export type CommentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CommentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CommentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CommentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CommentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CommentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields = {
  __typename?: 'CommentsFields';
  article?: Maybe<CommentsFields_Article>;
  content?: Maybe<CommentsFields_Content>;
  createdAt?: Maybe<CommentsFields_CreatedAt>;
  updatedAt?: Maybe<CommentsFields_UpdatedAt>;
};

export type CommentsFields_Article = {
  __typename?: 'CommentsFields_article';
  create?: Maybe<CommentsFields_Article_Create>;
  delete?: Maybe<CommentsFields_Article_Delete>;
  read?: Maybe<CommentsFields_Article_Read>;
  update?: Maybe<CommentsFields_Article_Update>;
};

export type CommentsFields_Article_Create = {
  __typename?: 'CommentsFields_article_Create';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_Article_Delete = {
  __typename?: 'CommentsFields_article_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_Article_Read = {
  __typename?: 'CommentsFields_article_Read';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_Article_Update = {
  __typename?: 'CommentsFields_article_Update';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_Content = {
  __typename?: 'CommentsFields_content';
  create?: Maybe<CommentsFields_Content_Create>;
  delete?: Maybe<CommentsFields_Content_Delete>;
  read?: Maybe<CommentsFields_Content_Read>;
  update?: Maybe<CommentsFields_Content_Update>;
};

export type CommentsFields_Content_Create = {
  __typename?: 'CommentsFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_Content_Delete = {
  __typename?: 'CommentsFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_Content_Read = {
  __typename?: 'CommentsFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_Content_Update = {
  __typename?: 'CommentsFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_CreatedAt = {
  __typename?: 'CommentsFields_createdAt';
  create?: Maybe<CommentsFields_CreatedAt_Create>;
  delete?: Maybe<CommentsFields_CreatedAt_Delete>;
  read?: Maybe<CommentsFields_CreatedAt_Read>;
  update?: Maybe<CommentsFields_CreatedAt_Update>;
};

export type CommentsFields_CreatedAt_Create = {
  __typename?: 'CommentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_CreatedAt_Delete = {
  __typename?: 'CommentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_CreatedAt_Read = {
  __typename?: 'CommentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_CreatedAt_Update = {
  __typename?: 'CommentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_UpdatedAt = {
  __typename?: 'CommentsFields_updatedAt';
  create?: Maybe<CommentsFields_UpdatedAt_Create>;
  delete?: Maybe<CommentsFields_UpdatedAt_Delete>;
  read?: Maybe<CommentsFields_UpdatedAt_Read>;
  update?: Maybe<CommentsFields_UpdatedAt_Update>;
};

export type CommentsFields_UpdatedAt_Create = {
  __typename?: 'CommentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_UpdatedAt_Delete = {
  __typename?: 'CommentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_UpdatedAt_Read = {
  __typename?: 'CommentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CommentsFields_UpdatedAt_Update = {
  __typename?: 'CommentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CommentsReadAccess = {
  __typename?: 'CommentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CommentsReadDocAccess = {
  __typename?: 'CommentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CommentsUpdateAccess = {
  __typename?: 'CommentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CommentsUpdateDocAccess = {
  __typename?: 'CommentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  card?: Maybe<MediaDocAccessFields_Sizes_Card>;
  tablet?: Maybe<MediaDocAccessFields_Sizes_Tablet>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card = {
  __typename?: 'MediaDocAccessFields_sizes_card';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Card_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_card_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Card_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Card_Width>;
};

export type MediaDocAccessFields_Sizes_Card_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height = {
  __typename?: 'MediaDocAccessFields_sizes_card_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url = {
  __typename?: 'MediaDocAccessFields_sizes_card_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width = {
  __typename?: 'MediaDocAccessFields_sizes_card_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet = {
  __typename?: 'MediaDocAccessFields_sizes_tablet';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Tablet_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width>;
};

export type MediaDocAccessFields_Sizes_Tablet_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  card?: Maybe<MediaFields_Sizes_Card>;
  tablet?: Maybe<MediaFields_Sizes_Tablet>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card = {
  __typename?: 'MediaFields_sizes_card';
  create?: Maybe<MediaFields_Sizes_Card_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaFields_Sizes_Card_Fields>;
  read?: Maybe<MediaFields_Sizes_Card_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
  __typename?: 'MediaFields_sizes_card_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Delete = {
  __typename?: 'MediaFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Fields = {
  __typename?: 'MediaFields_sizes_card_Fields';
  filename?: Maybe<MediaFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaFields_Sizes_Card_Url>;
  width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
  __typename?: 'MediaFields_sizes_card_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Update = {
  __typename?: 'MediaFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename = {
  __typename?: 'MediaFields_sizes_card_filename';
  create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaFields_sizes_card_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize = {
  __typename?: 'MediaFields_sizes_card_filesize';
  create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height = {
  __typename?: 'MediaFields_sizes_card_height';
  create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaFields_sizes_card_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType = {
  __typename?: 'MediaFields_sizes_card_mimeType';
  create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url = {
  __typename?: 'MediaFields_sizes_card_url';
  create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaFields_sizes_card_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width = {
  __typename?: 'MediaFields_sizes_card_width';
  create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaFields_sizes_card_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet = {
  __typename?: 'MediaFields_sizes_tablet';
  create?: Maybe<MediaFields_Sizes_Tablet_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Delete>;
  fields?: Maybe<MediaFields_Sizes_Tablet_Fields>;
  read?: Maybe<MediaFields_Sizes_Tablet_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Update>;
};

export type MediaFields_Sizes_Tablet_Create = {
  __typename?: 'MediaFields_sizes_tablet_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Delete = {
  __typename?: 'MediaFields_sizes_tablet_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Fields = {
  __typename?: 'MediaFields_sizes_tablet_Fields';
  filename?: Maybe<MediaFields_Sizes_Tablet_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Tablet_Filesize>;
  height?: Maybe<MediaFields_Sizes_Tablet_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Tablet_MimeType>;
  url?: Maybe<MediaFields_Sizes_Tablet_Url>;
  width?: Maybe<MediaFields_Sizes_Tablet_Width>;
};

export type MediaFields_Sizes_Tablet_Read = {
  __typename?: 'MediaFields_sizes_tablet_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Update = {
  __typename?: 'MediaFields_sizes_tablet_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename = {
  __typename?: 'MediaFields_sizes_tablet_filename';
  create?: Maybe<MediaFields_Sizes_Tablet_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filename_Update>;
};

export type MediaFields_Sizes_Tablet_Filename_Create = {
  __typename?: 'MediaFields_sizes_tablet_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename_Delete = {
  __typename?: 'MediaFields_sizes_tablet_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename_Read = {
  __typename?: 'MediaFields_sizes_tablet_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename_Update = {
  __typename?: 'MediaFields_sizes_tablet_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize = {
  __typename?: 'MediaFields_sizes_tablet_filesize';
  create?: Maybe<MediaFields_Sizes_Tablet_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filesize_Update>;
};

export type MediaFields_Sizes_Tablet_Filesize_Create = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize_Read = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize_Update = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height = {
  __typename?: 'MediaFields_sizes_tablet_height';
  create?: Maybe<MediaFields_Sizes_Tablet_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Height_Update>;
};

export type MediaFields_Sizes_Tablet_Height_Create = {
  __typename?: 'MediaFields_sizes_tablet_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height_Delete = {
  __typename?: 'MediaFields_sizes_tablet_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height_Read = {
  __typename?: 'MediaFields_sizes_tablet_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height_Update = {
  __typename?: 'MediaFields_sizes_tablet_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType = {
  __typename?: 'MediaFields_sizes_tablet_mimeType';
  create?: Maybe<MediaFields_Sizes_Tablet_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_MimeType_Update>;
};

export type MediaFields_Sizes_Tablet_MimeType_Create = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType_Read = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType_Update = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url = {
  __typename?: 'MediaFields_sizes_tablet_url';
  create?: Maybe<MediaFields_Sizes_Tablet_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Url_Update>;
};

export type MediaFields_Sizes_Tablet_Url_Create = {
  __typename?: 'MediaFields_sizes_tablet_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url_Delete = {
  __typename?: 'MediaFields_sizes_tablet_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url_Read = {
  __typename?: 'MediaFields_sizes_tablet_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url_Update = {
  __typename?: 'MediaFields_sizes_tablet_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width = {
  __typename?: 'MediaFields_sizes_tablet_width';
  create?: Maybe<MediaFields_Sizes_Tablet_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Width_Update>;
};

export type MediaFields_Sizes_Tablet_Width_Create = {
  __typename?: 'MediaFields_sizes_tablet_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width_Delete = {
  __typename?: 'MediaFields_sizes_tablet_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width_Read = {
  __typename?: 'MediaFields_sizes_tablet_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width_Update = {
  __typename?: 'MediaFields_sizes_tablet_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  card?: Maybe<Media_Sizes_Card>;
  tablet?: Maybe<Media_Sizes_Tablet>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Card = {
  __typename?: 'Media_Sizes_Card';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Tablet = {
  __typename?: 'Media_Sizes_Tablet';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<Article>;
  createComment?: Maybe<Comment>;
  createMedia?: Maybe<Media>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createUser?: Maybe<User>;
  deleteArticle?: Maybe<Article>;
  deleteComment?: Maybe<Comment>;
  deleteMedia?: Maybe<Media>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateArticle?: Maybe<Article>;
  updateComment?: Maybe<Comment>;
  updateMedia?: Maybe<Media>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateArticleArgs = {
  data: MutationArticleInput;
};


export type MutationCreateCommentArgs = {
  data: MutationCommentInput;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationArticleUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCommentUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Article?: Maybe<Article>;
  Articles?: Maybe<Articles>;
  Comment?: Maybe<Comment>;
  Comments?: Maybe<Comments>;
  Media?: Maybe<Media>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countArticles?: Maybe<CountArticles>;
  countComments?: Maybe<CountComments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessArticle?: Maybe<ArticlesDocAccess>;
  docAccessComment?: Maybe<CommentsDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryArticleArgs = {
  id: Scalars['String']['input'];
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Article_Where>;
};


export type QueryCommentArgs = {
  id: Scalars['String']['input'];
};


export type QueryCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Comment_Where>;
};


export type QueryMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryPayloadPreferencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountArticlesArgs = {
  where?: InputMaybe<Article_Where>;
};


export type QueryCountCommentsArgs = {
  where?: InputMaybe<Comment_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountUsersArgs = {
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessArticleArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessCommentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  password?: Maybe<UsersDocAccessFields_Password>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  password?: Maybe<UsersFields_Password>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ArticlesAccess = {
  __typename?: 'articlesAccess';
  create?: Maybe<ArticlesCreateAccess>;
  delete?: Maybe<ArticlesDeleteAccess>;
  fields?: Maybe<ArticlesFields>;
  read?: Maybe<ArticlesReadAccess>;
  update?: Maybe<ArticlesUpdateAccess>;
};

export type ArticlesDocAccess = {
  __typename?: 'articlesDocAccess';
  create?: Maybe<ArticlesCreateDocAccess>;
  delete?: Maybe<ArticlesDeleteDocAccess>;
  fields?: Maybe<ArticlesDocAccessFields>;
  read?: Maybe<ArticlesReadDocAccess>;
  update?: Maybe<ArticlesUpdateDocAccess>;
};

export type CommentsAccess = {
  __typename?: 'commentsAccess';
  create?: Maybe<CommentsCreateAccess>;
  delete?: Maybe<CommentsDeleteAccess>;
  fields?: Maybe<CommentsFields>;
  read?: Maybe<CommentsReadAccess>;
  update?: Maybe<CommentsUpdateAccess>;
};

export type CommentsDocAccess = {
  __typename?: 'commentsDocAccess';
  create?: Maybe<CommentsCreateDocAccess>;
  delete?: Maybe<CommentsDeleteDocAccess>;
  fields?: Maybe<CommentsDocAccessFields>;
  read?: Maybe<CommentsReadDocAccess>;
  update?: Maybe<CommentsUpdateDocAccess>;
};

export type CountArticles = {
  __typename?: 'countArticles';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountComments = {
  __typename?: 'countComments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationArticleInput = {
  comments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  preview: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationArticleUpdateInput = {
  comments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCommentInput = {
  article?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCommentUpdateInput = {
  article?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  tablet?: InputMaybe<MutationMediaUpdate_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  tablet?: InputMaybe<MutationMedia_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ArticlesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ArticlesQuery = { __typename?: 'Query', Articles?: { __typename?: 'Articles', totalPages?: number | null, docs?: Array<{ __typename?: 'Article', id?: string | null, title: string, preview: string, image: { __typename?: 'Media', url?: string | null, alt?: string | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null } | null, thumbnail?: { __typename?: 'Media_Sizes_Thumbnail', url?: string | null } | null, tablet?: { __typename?: 'Media_Sizes_Tablet', url?: string | null, width?: number | null, height?: number | null } | null } | null } } | null> | null } | null };

export type AddCommentMutationVariables = Exact<{
  articleId: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type AddCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', content: string } | null };

export type ArticleQueryVariables = Exact<{
  id: Scalars['String']['input'];
  articleId: Scalars['JSON']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', Article?: { __typename?: 'Article', title: string, content: string, preview: string, image: { __typename?: 'Media', url?: string | null, alt?: string | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null } | null, thumbnail?: { __typename?: 'Media_Sizes_Thumbnail', url?: string | null } | null, tablet?: { __typename?: 'Media_Sizes_Tablet', url?: string | null, width?: number | null, height?: number | null } | null } | null } } | null, Comments?: { __typename?: 'Comments', docs?: Array<{ __typename?: 'Comment', content: string, updatedAt?: any | null } | null> | null } | null };

export type ResponsiveImageFragmentFragment = { __typename?: 'Media', url?: string | null, alt?: string | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null } | null, thumbnail?: { __typename?: 'Media_Sizes_Thumbnail', url?: string | null } | null, tablet?: { __typename?: 'Media_Sizes_Tablet', url?: string | null, width?: number | null, height?: number | null } | null } | null };

export const ResponsiveImageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResponsiveImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tablet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<ResponsiveImageFragmentFragment, unknown>;
export const ArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Articles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResponsiveImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResponsiveImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tablet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"article"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResponsiveImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"article"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResponsiveImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tablet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;