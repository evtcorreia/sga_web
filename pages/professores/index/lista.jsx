import React, { useState, useEffect} from "react";
import { Container, Input, Button, Box } from '@mui/material';
import Menu from "../../../src/components/menu-lateral";
import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";
import ListaProfessoresComponent from "../../../src/components/professores/index";



export default function ListaProfessores(){



    const [professores, setProfessores] = useState([])

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const router = useRouter(); 

    useEffect(()=>{

        axios.get(`${url}v1/professores`, {
            headers: {

                'Authorization': TOKEN_IRIS_CLIENT
            }
        })
            .then(res => {

                setProfessores(res.data)
            })
            .catch((erro) => {

                if (erro.response.status === 401) {
                    router.push('/');
                };

            })


    }, [TOKEN_IRIS_CLIENT])
        

        
    
    return(

        <Box sx={
            {
                display:'flex',
                textAlign:'center'
            }
        }>

            <Menu />
            <ListaProfessoresComponent professores = {professores}/>
            
            


        </Box>
    )
}