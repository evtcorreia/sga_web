import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FormularioNovoAluno from "../../../src/components/alunos/Cadastro/formularioNovoAluno";
import Menu from "../../../src/components/menu-lateral";
export default function FormularioAluno(){


    return(

       <Box sx={
        {
            display:'flex',
            textAlign:'center'
        }
    }>

            <Menu/>
            <FormularioNovoAluno/>

       </Box>
    )


}