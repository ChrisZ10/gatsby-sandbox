import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from "../components/head";

const NotFound = () => {
    return (
        <Layout>
            <Head subtitle="404"/>
            <p><Link to="/">Back to Home</Link></p>
        </Layout>
    );
};

export default NotFound;