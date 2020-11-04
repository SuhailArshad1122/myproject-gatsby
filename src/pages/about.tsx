import { navigate } from 'gatsby';
import React from 'react';
import Layout from "./component/layout";


export default function About() {
    return <Layout>
        <h1>This is About Page</h1>
        <button onClick={ ()=> {
    navigate('/contact')}}>Click to reach contact page</button>

    </Layout>

}