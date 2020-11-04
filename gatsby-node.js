// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// following is for step 09     

var path = require('path');

exports.createPages = async ({actions, graphql}) => {
  const {createPage} = actions;
  const result = await graphql (`

  {
    allContentfulElectronics {
      nodes {
        slug
        title
        description {
          json
        }
      }
    }
  }
  
  `)
  console.log(JSON.stringify(result))

  result.data.allContentfulElectronics.nodes.forEach((obj) => {
    createPage({
      path: `/product/${obj.slug}`,
      component: path.resolve('./src/pages/templates/products.tsx'),
      context: {
        itemDetails: obj
      }
    })
  })
}










// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>> following is code for step07

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // Only update the `/app` page.
    if (page.path.match(/^\/product/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/product/*"
  
      // Update the page.
      createPage(page)
    }
  }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>> Below is code for step05-06 from Panacloud

// const arr = [
//     {name: "Fruit", desc: ""}
// ]

// exports.createPages = async function ({ actions}) {

//     actions.createPage({
//         path: "fruits",
//         component: require.resolve(`./src/pages/templates/fruits.tsx`),
//         context: { 
//             // Data passed to context is available
//             // in pageContext props of the template component
//             name: "Mango",
//             desc: "This is some description of mango"
//          },
//     });

//     actions.createPage({
//         path: "alpha",
//         component: require.resolve(`./src/pages/templates/alpha.tsx`),
//         context: { 
//             // Data passed to context is available
//             // in pageContext props of the template component
//             company: "Alpha Company ",
//             companyInfo: "Alpha Production Ltd., Lahore"
//          },
//     });

//     console.log("End of Gatsby Node File");
// }