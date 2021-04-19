import React from 'react';

import Layout from "../components/layout";

const Contact = () => {
    return (
        <Layout>
            <h1>Contact Info</h1>
            <ul>
                <li>Tel: 123-456-7890</li>
                <li>Email: abc@dfe.com</li>
                <li><a href="https://hcny.org" target="_blank" rel="noreferrer">Web: hcny.org</a></li>
            </ul>
        </Layout>
    );
};

export default Contact;