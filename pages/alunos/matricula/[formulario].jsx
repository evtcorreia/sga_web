import React, {useState} from 'react'
import FormularioMatricula from '../../../src/components/alunos/formularioMatricula'
import Menu from '../../../src/components/menu-lateral'
import { Container, Input, Button, Box } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';

import nookies from 'nookies'

import {useRouter} from "next/router";



export default function Formulario(){


    const [anoLetivo, setAnoLetivo] = useState([])

    const [turma, setTurma] = useState([])

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const router = useRouter(); 

    const aluno = router.query.formulario


    useEffect(()=>{

        axios.get(`${url}v1/ano-letivo/listar`, {
            headers: {

                'Authorization': TOKEN_IRIS_CLIENT
            }
        })
            .then(res => {

                setAnoLetivo(res.data)
            })
            .catch((erro) => {

                if (erro.response.status === 401) {
                    router.push('/');
                };

            })

            axios.get(`${url}v1/turmas`, {
                headers: {
    
                    'Authorization': TOKEN_IRIS_CLIENT
                }
            })
                .then(res => {
    
                    setTurma(res.data)
                })
                .catch((erro) => {
    
                    if (erro.response.status === 401) {
                        router.push('/');
                    };
    
                })
    


    },[])

    console.log(turma);

    return(
        <Box sx={
            {
                display:'flex',
                textAlign:'center'
            }
        }>

        <Menu/>
        <FormularioMatricula anoLetivo= {anoLetivo} turmas= {turma} aluno={aluno}/>
        
        </Box>
        
    )
}