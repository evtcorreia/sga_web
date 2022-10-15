import { useEffect, useState } from "react";
import Menu from "../../../src/components/menu-lateral";
import AlunosSalaComponent from "../../../src/components/sala/alunos-em-sala";

import { Container, Input, Button, Box } from '@mui/material';

export default function AlunosPorSala(){

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
            <AlunosSalaComponent /> 
            


        </Box>
    )
}