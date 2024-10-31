/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Atharv's Portfolio`,
    author: `Atharv Kulkarni`,
    siteUrl: `https://kulkarniatharv.github.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        sassOptions: {
          includePaths: ['src/styles'],
        },
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
            exportLocalsConvention: 'camelCase',
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-react-helmet-async',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdfs`,
        path: `${__dirname}/src/assets/pdfs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdfs`,
        path: `${__dirname}/src/assets/pdfs`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter:400,700`, // include the font weights you need
        ],
        display: 'swap',
      },
    },
  ],
}
