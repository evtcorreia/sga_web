
import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import InfoAluno from '../../../pages/alunos/info/[info]';
import nookies from 'nookies'
import jwt from "jsonwebtoken";
import axios from 'axios';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function BoxFuncoes({ aluno }) {


    const router = useRouter();
    const [result, setResult] = useState()
    const url = process.env.URL_PRODUCAO
    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')
    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    useEffect(() => {





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


    function deletaAluno() {


        var postData = {

        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                //"Access-Control-Allow-Origin": "*",
                'Authorization': TOKEN_IRIS_CLIENT
            }
        };

        axios.put(`${url}v1/aluno/delete/${aluno.id}`, postData, axiosConfig)
            .then((res) => {
                alert("aluno deletado")
                router.push('/alunos')
            })
            .catch((err) => {
                console.log("AXIOS ERROR coletado: ", err);

            })

    }

    return (
        <Box sx={
            {

                marginTop: "3vw",
                width: "80vw",
                height: "20vh",
                background: "#EEF1F5",

            }}>

            <Box sx={{ textAlign: "left", marginLeft: "2vw" }}>


                <Typography sx={{ color: '#002F78' }}>{aluno.serie}º {aluno.identificadorTurma} </Typography>
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


               {/*  {

                    result === 2 ?
                        ""
                        :

                        aluno.matricula === null ?
                            <Button variant="text" sx={{ background: "#002F78", color: "#ffffff", marginLeft: "4vh" }}> NOVA MATRICULA </Button>
                            :
                            <Button variant="text" sx={{ background: "#002F78", color: "#ffffff", marginLeft: "4vh" }}> FINALIZAR MATRICULA</Button>
                } */}

                <Link href={`/alunos/alterar/${aluno.id}`}>
                <Button
                    
                    sx={
                        {
                            background: '#002F78',
                            color: '#ffffff',
                            marginLeft: "4vh"
                        }
                    }>

                    Alterar Aluno
                </Button>

                        </Link>

                <Button
                    onClick={() => {

                        deletaAluno()
                    }}
                    sx={
                        {
                            background: '#002F78',
                            color: '#ffffff',
                            marginLeft: "4vh"
                        }
                    }>

                    Deletar Aluno
                </Button>






            </Box>
        </Box>
    )
}