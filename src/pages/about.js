import React from 'react';
import { Link } from 'gatsby';

import Layout from "../components/layout";
import Head from "../components/head";

const About = () => {
    return (
        <Layout>
            <Head subtitle="About"/>
            <h1>About Me</h1>
            <p>I am a happy developer.</p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        </Layout>
    );
};

export default About;