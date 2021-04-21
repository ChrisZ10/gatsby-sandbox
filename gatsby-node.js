const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    
    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        createNodeField({
            node,
            name: "slug",
            value: slug 
        });
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve("./src/templates/blog.js");
    const postTempalte = path.resolve("./src/templates/post.js");

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const wp = await graphql(`
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
                            slug
                            id
                        }
                    }
                } 
            }
        }
    `);

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        });
    });

    wp.data.wpContent.posts.edges.forEach((edge) => {
        createPage({
            component: postTempalte,
            path: `post/${edge.node.slug}`,
            context: {
                id: edge.node.id
            }
        })
    })
}