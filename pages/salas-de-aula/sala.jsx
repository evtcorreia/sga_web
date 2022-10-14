import { useEffect, useState } from "react";
import Menu from "../../src/components/menu-lateral";
import SalaComponent from "../../src/components/sala/home";
import getMenuSecretaria from "../api/menuSecretaria";
import { Container, Input, Button, Box } from '@mui/material';

export default function Sala(){

    /*const [menu, setMenu] = useState(Array<object>);
    //useEffect(()=>{
        setMenu(getMenu());
    //},[])*/
    
    
    

    return(

        <Box sx={
            {
                display:'flex',
                alignItems:'center',
                textAlign:'center',
                background:"#F8F8F8"
               
            }
        }>

            <Menu />
             <SalaComponent /> 
            


        </Box>
    )
}