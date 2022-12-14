import { useEffect, useState } from "react";
import Menu from "../../../src/components/menu-lateral";
import AlunosSalaComponent from "../../../src/components/sala/alunos-em-sala";

import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";

import { Container, Input, Button, Box } from '@mui/material';

export default function AlunosPorSala(){

    /*const [menu, setMenu] = useState(Array<object>);
    //useEffect(()=>{
        setMenu(getMenu());
    //},[])*/

    const [alunos, setAlunos] = useState([])
    const[sala, setSala] = useState('')

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const router = useRouter(); 
    
   

    

    useEffect(() => {

        axios.get(`${url}v1/aluno/turma/${router.query.alunos}`, {
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


    }, [alunos])

    
    
    
    

    return(

        <Box sx={
            {
                display:'flex',
                alignItems:'center',
                textAlign:'center',
                background:"#F8F8F8"
               
            }
        }>

            <Menu />
            <AlunosSalaComponent alunos = {alunos} /> 
            


        </Box>
    )
}



