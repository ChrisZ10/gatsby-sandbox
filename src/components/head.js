import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ subtitle }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }    
    `);

    return (
        <Helmet>
            <title>{`${subtitle} | ${data.site.siteMetadata.title}`}</title>
        </Helmet>
    );
};

export default Head;
