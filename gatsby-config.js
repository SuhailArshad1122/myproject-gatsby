const dotenv = require("dotenv");

dotenv.config();


module.exports = {
    plugins: [
      "gatsby-plugin-typescript",
      `gatsby-plugin-material-ui`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          // spaceId: "",
          
          // Learn about environment variables: https://gatsby.dev/env-vars
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          // accessToken: "",
          
        },
      },

      // {
      //   resolve: `gatsby-source-contentful`,
      //   options: {
      //     spaceId: process.env.CONTENTFUL_SPACE_ID,
      //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      //   },
      // },


  ],
  };



//   // In your gatsby-config.js
// module.exports = {
//   plugins: [
//     {
//       resolve: `gatsby-source-contentful`,
//       options: {
//         spaceId: `your_space_id`,
//         // Learn about environment variables: https://gatsby.dev/env-vars
//         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//       },
//     },
//   ],
// }