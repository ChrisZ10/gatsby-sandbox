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
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src`
            }
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        "gatsby-plugin-playground",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 500,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            } 
        }
    ]
};
