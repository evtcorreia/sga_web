
import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import nookies from 'nookies'
import jwt from "jsonwebtoken";
import Link from 'next/link';

export default function BoxFuncoesProfessor({ professor }) {



    const [result, setResult] = useState()

    useEffect(() => {


        const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

        const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT



        const chaveDecodificada = jwt.decode(TOKEN_IRIS_CLIENT);


        if (chaveDecodificada == null) {

            router.push('/')

        } else if (chaveDecodificada.autorizacao === 1) {

            setResult(1)
        } else if (chaveDecodificada.autorizacao === 2) {

            setResult(2)

        } else {
            router.push('/')
        }

    }, [])

    return (
        <Box sx={
            {

                marginTop: "3vw",
                width: "80vw",
                height: "20vh",
                background: "#EEF1F5",

            }}>

            <Box sx={{ textAlign: "left", marginLeft: "2vw" }}>


                <Typography sx={{ color: '#002F78' }}> </Typography>
            </Box>
            <Box sx={
                {
                    display: "flex",
                    width: "80vw",
                    height: "15vh",
                    background: "#EEF1F5",
                    flexDirection: "row",
                    alignItems: "center"
                }}>





                {/*   <Button variant="text" sx={{background:"#002F78", color:"#ffffff", marginLeft:"4vh"}}> ALTERAR DADOS </Button>                        
                        <Button variant="text" sx={{background:"#002F78", color:"#ffffff", marginLeft:"4vh"}}> DELETAR PROFESSOR </Button> */}


                <Link href={"/professores/alocar-professor-turma/" + professor.id}>
                    <Button sx={
                        {
                            background: '#002F78',
                            color: '#ffffff',
                            marginLeft:"4vh"
                        }
                    }>

                        Alocar Professor
                    </Button>
                </Link>






            </Box>
        </Box>
    )
}