import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

import "../styles/index.scss";

const Home = () => {
    return (
        <Layout>
            <Head subtitle="Home"/>
            <h1>Home</h1>
            <p>Welcome to my website</p>
        </Layout>
    );
};

export default Home;
