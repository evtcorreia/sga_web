import { useEffect, useState } from "react";
import Menu from "../../src/components/menu-lateral";
import HomeComponent from "../../src/components/home";
import getMenuSecretaria from "../api/menuSecretaria";
import { Container, Input, Button, Box } from '@mui/material';
import Aguardando from "../../src/components/aguardando-implementacao";

export default function Turmas(){

    /*const [menu, setMenu] = useState(Array<object>);
    //useEffect(()=>{
        setMenu(getMenu());
    //},[])*/
    
    
    

    return(

        <Box sx={
            {
                display:'flex',
                textAlign:'center'
            }
        }>

            <Menu />
            < Aguardando />
            


        </Box>
    )
}