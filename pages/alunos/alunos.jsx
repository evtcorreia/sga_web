import { useEffect, useState } from "react";
import Menu from "../../src/components/menu-lateral";
import HomeComponent from "../../src/components/home";
import getMenuSecretaria from "../api/menuSecretaria";
import { Container, Input, Button, Box } from '@mui/material';
import Aguardando from "../../src/components/aguardando-implementacao";
import ListaAlunos from "../../src/components/alunos/index";

import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";


export default function Alunos(){

    /*const [menu, setMenu] = useState(Array<object>);
    //useEffect(()=>{
        setMenu(getMenu());
    //},[])*/

    const [alunos, setAlunos] = useState([])

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const router = useRouter(); 

    useEffect(() => {

        axios.get(`${url}v1/alunos/full`, {
            headers: {

                'Authorization': TOKEN_IRIS_CLIENT
            }
        })
            .then(res => {

                setAlunos(res.data)
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
            < ListaAlunos alunos = {alunos} />
            


        </Box>
    )
}