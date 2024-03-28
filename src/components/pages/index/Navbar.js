
import React from 'react'
import Logo from '../../../assets/images/logo.png'
import { Chip, Fab, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar=props=>{
    return (
        <>
            <div style={{display:"flex",justifyContent:"center",width:"100%"}} >
                    <img src={Logo} />
                    <div style={{flexGrow:1}} ></div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"30%",zIndex:5}} >
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
                            <Chip sx={{backgroundColor:"lightgray",color:"#2d308f",textAlign:'center',width:"6vw"}} label={<Typography>Login</Typography>} />
                        </Link>
                    </div>
            </div>
        </>
    )
}
export default Navbar