import React from 'react';
import { Link } from 'gatsby';

import Layout from "../components/layout";

const About = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I am a happy developer.</p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        </Layout>
    );
};

export default About;