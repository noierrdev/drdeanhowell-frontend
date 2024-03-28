import React from 'react'
import {useNavigate, useRoutes, matchRoutes} from 'react-router-dom'
import Loadable from './Loadable';
import axios from 'axios'
import { BACKEND_URL } from '../AppConfigs';
import {useSelector,useDispatch} from 'react-redux'
// import {authSuccess} from '../store/reducers/auth.reducer'
const AppRoutes = (props)=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const routes= [
        {
            path:"/",
            element:Loadable(React.lazy(()=>import('../layouts/Default')))(props),
            children:[
                {
                    path:"",
                    element:Loadable(React.lazy(()=>import('../pages/index')))(props),
                }
            ]
        },
       
        
    ]
    // React.useEffect(()=>{
    //     axios.get(`${BACKEND_URL}/auth/verify`,{
    //         headers:{
    //             token:sessionStorage.getItem('token')
    //         }
    //     })
    //     .then(response=>{
    //         if(response.data.status=="success"){
    //             dispatch(authSuccess(response.data.data))
    //         }else{
    //             const route=matchRoutes(routes,window.location)[matchRoutes(routes,window.location).length-1];
    //             if(route.route.auth) return navigate("/")
    //         }
    //     })
    // },[])
    return useRoutes(routes);
}
const Redirect=props=>{
    const navigate=useNavigate()
    React.useEffect(()=>{
        navigate(props.to)
    },[])
    return <></>
}
export default AppRoutes;