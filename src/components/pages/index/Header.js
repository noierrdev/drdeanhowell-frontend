import { Chip, Container, Fab, Typography } from "@mui/material";
import Navbar from "./Navbar";
import DeanHowell from '../../../assets/images/DrDeanHowell.png'
import { Link } from "react-router-dom";
 export default function (){

    return (
        <>
            <div style={{backgroundImage:"linear-gradient(to bottom, #2d308f, #0c0d1b)",position:'relative',overflowX:"hidden",maxWidth:"100%",width:"100%",minWidth:"100%",height:"70vh",paddingTop:"5vh",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >
                <div style={{position:"absolute",right:"-30vw",top:"-90vh",backgroundColor:"#3d409a",width:1293,height:1293,borderRadius:"50%"}} ></div>
                <img src={DeanHowell} style={{position:"absolute",right:0,zIndex:4,bottom:0}} />
                <Container maxWidth="xl" >
                    <Navbar/>
                    
                    <Typography variant="h4" component={`h4`} color={"white"} sx={{marginTop:"10vh"}} >
                        Helping People
                    </Typography>
                    <Typography variant="h2" component={`h2`} color={"white"} sx={{marginTop:"1vh"}} >
                        Gain Power in Their Life
                    </Typography>
                    <Typography color={"white"} variant="h5" component={'h5'} sx={{marginTop:"2vh"}} >
                        Funding handshake buyer business-to-business metrics iPad partnership. First<br/> mover advantage innovator success deployment non-disclosure.
                    </Typography>
                    <div style={{marginTop:"2vh"}} >
                        <Link>
                            <Chip variant="filled"  sx={{backgroundColor:"#2e3192",height:"5vh",textAlign:"center",width:"10vw"}} label={
                                <Typography color={"white"}  variant="h5" component={"h5"} >
                                    Shop Now
                                </Typography>
                            } >
                                
                            </Chip>
                        </Link>
                        <Link>
                            <Chip variant="outlined" sx={{textAlign:"center",height:"5vh",width:"10vw",marginLeft:"2vw"}} label={
                                <Typography color={"white"}  variant="h5" component={"h5"} >
                                    Read More
                                </Typography>
                            } >
                                
                            </Chip>
                        </Link>
                    </div>
                    
                </Container>
                
            </div>
        </>
    )
 }