import React from 'react';

export default function Alpha({pageContext}){
    return <>
<h1>{pageContext.company}</h1>
    <h3>This is an Alpha Production Limited - h3</h3>
<h2>{pageContext.companyInfo}</h2>
</>
}