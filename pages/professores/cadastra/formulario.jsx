import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Menu from "../../../src/components/menu-lateral";
import FormularioNovoProfesssor from "../../../src/components/professores/cadastra";
export default function FormularioProfessor(){


    return(

       <Box sx={
        {
            display:'flex',
            textAlign:'center'
        }
    }>

            <Menu/>
            <FormularioNovoProfesssor/>
           

       </Box>
    )


}