import { useEffect, useState } from "react";
import Menu from "../../../src/components/menu-lateral";
import HomeComponent from "../../../src/components/home";
import { Container, Input, Button, Box } from '@mui/material';
import CadastraTurmasComponent from "../../../src/components/turmas/cadastroTurma";



import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";

export default function Turmas(){

 
    

    const [serie, setSerie] = useState([])
    const [sala, setSala] = useState([])

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO
    
    useEffect(()=>{


        axios.get(`${url}v1/series`, {
            headers: {

                'Authorization': TOKEN_IRIS_CLIENT
            }
        })
            .then(res => {

                setSerie(res.data)
            })
            .catch((erro) => {

                if (erro.response.status === 401) {
                    router.push('/');
                };

            })



            axios.get(`${url}v1/salas`, {
                headers: {
    
                    'Authorization': TOKEN_IRIS_CLIENT
                }
            })
                .then(res => {
    
                    setSala(res.data)
                })
                .catch((erro) => {
    
                    if (erro.response.status === 401) {
                        router.push('/');
                    };
    
                })





    },[])
    

    return(

        <Box sx={
            {
                display:'flex',
                textAlign:'center'
            }
        }>

            <Menu />

            <CadastraTurmasComponent series = {serie} salas = {sala}/>
            


        </Box>
    )
}