import React from "react";
import { useEffect, useState } from "react";
import Menu from "../../src/components/menu-lateral";
import { Container, Input, Button, Box } from '@mui/material';
import axios from 'axios';
import nookies from 'nookies'
import {useRouter} from "next/router";
import ListaTurmasComponent from "../../src/components/turmas/listaTurmas";

export default function ListaTurmas(){

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const router = useRouter(); 

    const [turmas, setTurmas] = useState([])

    useEffect(()=>{

        axios.get(`${url}v1/turmas`, {
            headers: {

                'Authorization': TOKEN_IRIS_CLIENT
            }
        })
            .then(res => {

                setTurmas(res.data)
            })
            .catch((erro) => {

                if (erro.response.status === 401) {
                    router.push('/');
                };

            })

    })

    return(

        <Box sx={
            {
                display:'flex',
                alignItems:'center',
                textAlign:'center',
                background:"#F8F8F8"
               
            }
        }>

          <Menu/>
          <ListaTurmasComponent turmas = {turmas}/>
             
            


        </Box>


    )
}