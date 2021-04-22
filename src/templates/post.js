import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from "../components/head";

export const query = graphql`
    query($id: ID!) {
        wpContent {
            post(id: $id) {
                title
                content
            }
        }
    }
`;

const Post = ({ data }) => {
    return (
        <Layout>
            <Head subtitle={data.wpContent.post.title}/>
            <h1>{data.wpContent.post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: data.wpContent.post.content}}></div>
        </Layout>
    );
};

export default Post;