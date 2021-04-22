import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from "../components/head";

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            Title
                            Date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <Head subtitle="Blog"/>
            <h1>Blog</h1>
            <ol>
                {
                    data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.Title}</h2>
                                    <p>{edge.node.frontmatter.Date}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    );
};

export default Blog;