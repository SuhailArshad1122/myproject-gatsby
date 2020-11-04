import React from 'react';
import { Link, navigate }  from 'gatsby';
import styles from './nav.module.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


export default function NavBar () {
    return <div className={styles.narbar}>
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link> */}
        <Box component="span" margin={3} m={0}>
            <Button />
        </Box>



        <Button variant="contained" color="primary" onClick={()=> {navigate('/')}} >Home</Button>
        <Button variant="contained" color="primary" onClick={()=> {navigate('/about')}} >About</Button>
        <Button variant="contained" color="primary" onClick={()=> {navigate('/contact')}} >Contact</Button>
        <Button variant="contained" color="primary" onClick={()=> {navigate('/product')}} >Products</Button>
        
    </div>
}


// 


// export default function Home () {
//     return <Layout>
       
//         <h1> AOA Pakistan from Home page</h1>
//         
//         <br />
//         <Button variant="contained" color="secondary">
//             Secondary
//         </Button>
//     </Layout>
// }