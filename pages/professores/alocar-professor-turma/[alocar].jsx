import React,{useState, useEffect} from 'react'
import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";
import { Container, Input, Button, Box } from '@mui/material';
import Menu from "../../../src/components/menu-lateral";
import FormularioAlocarProfessor from '../../../src/components/professores/alocarProfessor';



export default function Alocar(){


   

    const [turma, setTurma] = useState([])

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const router = useRouter(); 

    const professor = router.query.alocar


    useEffect(()=>{

       

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


    return (

        <Box sx={
            {
                display: 'flex',
                textAlign: 'center'
            }
        }>
            <Menu />
            <FormularioAlocarProfessor turmas = {turma}  professor = {professor}/>
           






        </Box>
    )
} 




