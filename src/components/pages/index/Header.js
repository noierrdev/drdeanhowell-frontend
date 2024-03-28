import Navbar from "./Navbar";

 export default function (){

    return (
        <>
            <div style={{backgroundImage:"linear-gradient(to bottom, #2d308f, #0c0d1b)",height:"70vh",paddingTop:"5vh"}} >
                <Navbar/>
                <div style={{position:"absolute",zIndex:3,left:"60vw",top:"-90vh",backgroundColor:"#3d409a",width:1293,height:1293,borderRadius:"50%"}} ></div>
            </div>
        </>
    )
 }