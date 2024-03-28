import { Button } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {authSuccess} from '../store/reducers/auth.reducer'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/pages/index/Navbar'
import Header from "../components/pages/index/Header";
export default (props)=>{
    return (
        <>
            <Header/>
        </>
    )
}