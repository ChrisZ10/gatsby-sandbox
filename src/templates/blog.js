import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from "../components/head";

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {
            slug: {
                eq: $slug
            }
        }) {
            frontmatter {
                Title
                Date
            }
            html
        }
    }
`;

const Blog = ({ data }) => {
    return (
        <Layout>
            <Head subtitle={data.markdownRemark.frontmatter.Title}/>
            <h1>{data.markdownRemark.frontmatter.Title}</h1>
            <h2>{data.markdownRemark.frontmatter.Date}</h2>
            <div dangerouslySetInnerHTML={{ __html : data.markdownRemark.html }}></div>
        </Layout>
    );
};

export default Blog;