import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const Post = () => {

    const data = useStaticQuery(graphql`
        query {
            wpContent {
                posts(
                    first: 3
                    where: {
                        orderby: {
                            field: DATE
                            order: DESC
                        }
                }) {
                    edges {
                        node {
                            title
                            date
                            slug
                        }
                    }
                } 
            }	  
        }
    `);

    return (
        <Layout>
            <h1>Posts from WordPress</h1>
            <ul>
                {data.wpContent.posts.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/post/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <h3>{edge.node.date}</h3>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default Post;