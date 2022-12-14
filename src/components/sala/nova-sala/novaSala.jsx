
import { useEffect, useState } from 'react';
import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";
import { Box, Button, Typography, TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function NovaSalaComponent() {

    

    const [salas, setSalas] = useState([])

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const router = useRouter(); 

    const [numeroSala, setNumeroSala] = useState('')
    const [capacidadeSala, setCapacidadeSala] = useState('')
    const [descricaoSala, setDescricaoSala] = useState('')

    useEffect(() => {

        axios.get(`${url}v1/salas`, {
            headers: {

                'Authorization': TOKEN_IRIS_CLIENT
            }
        })
            .then(res => {

                setSalas(res.data)
            })
            .catch((erro) => {

                if (erro.response.status === 401) {
                    router.push('/');
                };

            })


    }, [TOKEN_IRIS_CLIENT])



    function gravarSala(){

        axios.post(`${url}v1/sala/criar`, {
            numero:numeroSala,
            descricao: descricaoSala,
            capacidade: capacidadeSala
        },{
            headers: {
                'Authorization': TOKEN_IRIS_CLIENT
            }
        }).then((res) =>{
            
            router.push('/salas-de-aula');
        })
        .catch((erro)=>{

           

        })

    
        
        
        
    }

    return (

        <Box


            sx={
                {
                    width: "80vw",
                    height: "90vh",
                    display: 'flex',
                    background: "#ffffff",
                    flexDirection: "column",
                }
            }>
            <Box sx={
                {
                    color: "black",

                    textAlign: 'left'

                }
            }>
                <Typography variant="h4" sx={
                    {
                        color: "#002F78"
                    }
                }>Nova Sala</Typography>
            </Box>
            <Box

                height='1vh'
                width='80vw'
                sx={
                    {

                        background: "#F8F8F8",
                        marginTop: "2vw"
                    }
                }
            ></Box>

            
<form

onSubmit={(e) => {
    e.preventDefault();
    gravarSala(numeroSala,capacidadeSala,descricaoSala)
    
    
                    
                }}
                >
               {/*  <Formulario> */}
                    
               <h4>Informações do produto</h4>
                <Box sx={
                    
                    {
                        
                        borderColor:'#d3d3d3',
                        padding: 2,
                        display:'flex',
                        justifyContent:'space-around',
                        flexWrap: 'wrap'
                    }
                }>

                    

                <TextField 
                    id="outlined-basic" 
                    label="Numero da Sala" 
                    placeholder="Informe o numero da sala"
                    variant="outlined"
                    onChange={(e)=>{
                        
                        setNumeroSala(e.target.value)
                    }}
                    value={numeroSala}
                    //width='70vw'
                    autoFocus={true}
                    
                    sx={
                        {
                            marginTop: 3,
                            width:400
                        }
                    }
                    
                    />

                <TextField 
                    id="outlined-basic" 
                    label="Capacidade" 
                    placeholder="Informe o numero da sala"
                    variant="outlined"
                    onChange={(e)=>{
                        
                        setCapacidadeSala(e.target.value)
                    }}
                    value={capacidadeSala}
                    //width='70vw'
                    autoFocus={true}
                    
                    sx={
                        {
                            marginTop: 3,
                            width:400
                        }
                    }
                    
                    />


                    
                <TextField 
                    id="outlined-basic" 
                    label="Descricao" 
                    placeholder="Informe a descricao"
                    variant="outlined"
                    onChange={(e)=>{
                        
                        setDescricaoSala(e.target.value)
                    }}
                    value={descricaoSala}
                    //width='70vw'
                    autoFocus={true}
                    
                    sx={
                        {
                            marginTop: 3,
                            width:400
                        }
                    }
                    
                    />

                

                
                
                </Box>
                
                
                

               

                <Button 
                    variant="contained"
                    type="submit"
                    sx={
                        {
                            marginTop:5
                            
                        }
                    }
                    >Criar Sala</Button>
            </form>







            


           




        </Box>
    )
}