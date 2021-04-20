module.exports = {
    siteMetadata: {
        title: "Gatsby Sandbox",
        author: "Chris Zhao"
    },
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "WPGraphQL",
                fieldName: "wpContent",
                url: "https://hcny.org/graphql"
            }
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-playground",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src`
            }
        },
        "gatsby-transformer-remark"
    ]
};
