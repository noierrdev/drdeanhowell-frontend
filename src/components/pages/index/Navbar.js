
import React from 'react'
import Logo from '../../../assets/images/logo.png'
import { Fab, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar=props=>{
    return (
        <>
            <div style={{display:"flex",justifyContent:"center",width:"100%"}} >
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"80%"}} >
                    <img src={Logo} />
                    <div style={{flexGrow:1}} ></div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"40%",zIndex:5}} >
                        <Link to="/" >
                            <Typography sx={{color:"white",textDecoration:"none"}} >Products</Typography>
                        </Link>
                        <Link to="/" >
                            <Typography sx={{color:"white",textDecoration:"none"}} >Services</Typography>
                        </Link>
                        <Link to="/" >
                            <Typography sx={{color:"white",textDecoration:"none"}} >About</Typography>
                        </Link>
                        <Link to="/" >
                            <div>
                                <Typography sx={{color:"white",textDecoration:"none"}} >Log In</Typography>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar