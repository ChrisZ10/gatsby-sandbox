module.exports = {
    siteMetadata: {
        title: "Gatsby Sandbox"
    },
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "WPGraphQL",
                fileName: "wpcontent",
                url: "https://hcny.org/graphql"
            }
        }
    ]
};
