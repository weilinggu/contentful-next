/* 772797ca3a69744b34cf0d7e85c24479d3eebfae
 * This file is automatically generated by graphql-let. */

/// <reference types="react" />
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type ContentSys = {
    __typename?: 'ContentSys';
    type?: Maybe<Scalars['String']>;
    linkType?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};
export declare type ContentType = {
    __typename?: 'ContentType';
    sys?: Maybe<ContentSys>;
};
export declare type Country = {
    __typename?: 'Country';
    sys?: Maybe<EntrySys>;
    fields?: Maybe<CountryFields>;
};
export declare type CountryFields = {
    __typename?: 'CountryFields';
    countryName?: Maybe<Scalars['String']>;
};
export declare type Entry = {
    __typename?: 'Entry';
    sys?: Maybe<EntrySys>;
    fields?: Maybe<EntryFields>;
};
export declare type EntryFields = {
    __typename?: 'EntryFields';
    pageTitle?: Maybe<Scalars['String']>;
    productBlock?: Maybe<ProductBlock>;
    instructionBlock?: Maybe<InstructionBlock>;
    slug?: Maybe<Scalars['String']>;
    countries?: Maybe<Array<Maybe<Country>>>;
};
export declare type EntrySys = {
    __typename?: 'EntrySys';
    space?: Maybe<Space>;
    type?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    contentType?: Maybe<ContentType>;
    revision?: Maybe<Scalars['Int']>;
    createdAt?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    environment?: Maybe<Environment>;
    locale?: Maybe<Scalars['String']>;
};
export declare type Environment = {
    __typename?: 'Environment';
    sys?: Maybe<EnvironmentSys>;
};
export declare type EnvironmentSys = {
    __typename?: 'EnvironmentSys';
    id?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    linkType?: Maybe<Scalars['String']>;
};
export declare type ImageDimensions = {
    __typename?: 'ImageDimensions';
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
};
export declare type ImageFile = {
    __typename?: 'ImageFile';
    url?: Maybe<Scalars['String']>;
    imageFileDetails?: Maybe<ImageFileDetails>;
    fileName?: Maybe<Scalars['String']>;
    contentType?: Maybe<Scalars['String']>;
};
export declare type ImageFileDetails = {
    __typename?: 'ImageFileDetails';
    size?: Maybe<Scalars['Int']>;
    image?: Maybe<ImageDimensions>;
};
export declare type Instruction = {
    __typename?: 'Instruction';
    sys?: Maybe<EntrySys>;
    fields?: Maybe<InstructionFields>;
};
export declare type InstructionBlock = {
    __typename?: 'InstructionBlock';
    sys?: Maybe<EntrySys>;
    fields?: Maybe<InstructionBlockFields>;
};
export declare type InstructionBlockFields = {
    __typename?: 'InstructionBlockFields';
    instructionComponent?: Maybe<InstructionComponent>;
    title?: Maybe<Scalars['String']>;
    style?: Maybe<Scalars['String']>;
};
export declare type InstructionComponent = {
    __typename?: 'InstructionComponent';
    sys?: Maybe<EntrySys>;
    fields?: Maybe<InstructionComponentFields>;
};
export declare type InstructionComponentFields = {
    __typename?: 'InstructionComponentFields';
    title?: Maybe<Scalars['String']>;
    instructions?: Maybe<Array<Maybe<Instruction>>>;
};
export declare type InstructionFields = {
    __typename?: 'InstructionFields';
    text?: Maybe<Scalars['String']>;
    image?: Maybe<ProductImage>;
    title?: Maybe<Scalars['String']>;
};
export declare type MagentoProductInfo = {
    __typename?: 'MagentoProductInfo';
    sys?: Maybe<EntrySys>;
    fields?: Maybe<ProductInfoFields>;
};
export declare type ProductBlock = {
    __typename?: 'ProductBlock';
    sys?: Maybe<EntrySys>;
    fields?: Maybe<ProductBlockFields>;
};
export declare type ProductBlockFields = {
    __typename?: 'ProductBlockFields';
    productComponent?: Maybe<ProductComponent>;
    style?: Maybe<Scalars['String']>;
    blockTitle?: Maybe<Scalars['String']>;
};
export declare type ProductComponent = {
    __typename?: 'ProductComponent';
    sys?: Maybe<EntrySys>;
    fields?: Maybe<ProductComponentFields>;
};
export declare type ProductComponentFields = {
    __typename?: 'ProductComponentFields';
    productName?: Maybe<Scalars['String']>;
    image?: Maybe<Array<Maybe<ProductImage>>>;
    magentoProductInfo?: Maybe<Array<Maybe<MagentoProductInfo>>>;
    slug?: Maybe<Scalars['String']>;
};
export declare type ProductImage = {
    __typename?: 'ProductImage';
    sys?: Maybe<EntrySys>;
    productImageFields?: Maybe<ProductImageFields>;
};
export declare type ProductImageFields = {
    __typename?: 'ProductImageFields';
    title?: Maybe<Scalars['String']>;
    file?: Maybe<ImageFile>;
};
export declare type ProductInfoFields = {
    __typename?: 'ProductInfoFields';
    sku?: Maybe<Scalars['String']>;
};
export declare type Query = {
    __typename?: 'Query';
    viewer: User;
    entries?: Maybe<Array<Maybe<Entry>>>;
};
export declare type Space = {
    __typename?: 'Space';
    sys?: Maybe<SpaceSys>;
    type?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};
export declare type SpaceSys = {
    __typename?: 'SpaceSys';
    type?: Maybe<Scalars['String']>;
    linkType?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    name: Scalars['String'];
    status: Scalars['String'];
};
export declare type EntryQueryVariables = {};
export declare type EntryQuery = ({
    __typename?: 'Query';
} & {
    entries?: Maybe<Array<Maybe<({
        __typename?: 'Entry';
    } & {
        sys?: Maybe<({
            __typename?: 'EntrySys';
        } & Pick<EntrySys, 'id'>)>;
        fields?: Maybe<({
            __typename?: 'EntryFields';
        } & Pick<EntryFields, 'pageTitle'>)>;
    })>>>;
});
export declare const EntryDocument: import("graphql").DocumentNode;
export declare type EntryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EntryQuery, EntryQueryVariables>, 'query'>;
export declare const EntryComponent: (props: EntryComponentProps) => JSX.Element;
/**
 * __useEntryQuery__
 *
 * To run a query within a React component, call `useEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `useEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEntryQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useEntryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EntryQuery, EntryQueryVariables>): ApolloReactCommon.QueryResult<EntryQuery, EntryQueryVariables>;
export declare function useEntryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EntryQuery, EntryQueryVariables>): ApolloReactHooks.QueryTuple<EntryQuery, EntryQueryVariables>;
export declare type EntryQueryHookResult = ReturnType<typeof useEntryQuery>;
export declare type EntryLazyQueryHookResult = ReturnType<typeof useEntryLazyQuery>;
export declare type EntryQueryResult = ApolloReactCommon.QueryResult<EntryQuery, EntryQueryVariables>;
