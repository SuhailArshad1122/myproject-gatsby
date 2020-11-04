import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from '../component/layout'

export default function Products({ pageContext }) {
    console.log(pageContext);
    const {itemDetails} = pageContext
    return <Layout>         
        <h1>{itemDetails.title}</h1>
        <p> { documentToReactComponents(itemDetails.description.json) }</p>
        </Layout>
}