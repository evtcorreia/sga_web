import React, { useState, useEffect } from 'react'
import nookies from 'nookies'
import jwt from "jsonwebtoken";
import { Container, Input, Button, Box, FormControl, InputLabel, FormHelperText, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import axios from 'axios';
import { useRouter } from "next/router";



export default function CadastraTurmasComponent({ series, salas }) {
    const [identificador, setIdentificador] = useState()
    const [status, setStatus] = useState(1)
    const [serie, setSerie] = useState()
    const [sala, setSala] = useState()

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO


    const router = useRouter()
    function criaTurma() {

      




        var postData = {
            identificador: identificador,
            status_turma_id: status,
            serie_id: serie,
            sala_id: sala

        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                //"Access-Control-Allow-Origin": "*",
                'Authorization': TOKEN_IRIS_CLIENT
            }
        };

        axios.post(`${url}v1/turma/nova`, postData, axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
                router.push('/turmas/index');
            })
            .catch((err) => {
                console.log("AXIOS ERROR coletado: ", err);
               
            })





    }

    return (

        <Box
            sx={{

                width: "80vw",
                textAliugn: "Center"


            }}
        >
            <Typography sx={{ marginTop: "5vh", color: "#000000" }}>CADASTRO DE NOVA TURMA</Typography>




            <form
                onSubmit={(e) => {

                    e.preventDefault()

                    criaTurma()
                }}
            >

                <FormControl fullWidth 
                    sx={{
                        marginTop: "2vh"
                    }}>
                    <InputLabel id="demo-simple-select-label">Serie</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Ano"
                        onChange={(e) => {


                            setSerie(e.target.value)
                           




                        }}
                        value={serie}
                    >
                        {series.map((item, idx) => {



                            return <MenuItem key={idx} value={item.id}>{item.serie}</MenuItem>


                        })}
                    </Select>
                </FormControl>

                <FormControl
                    fullWidth
                    sx={{
                        marginTop: "2vh"
                    }}
                >
                    <InputLabel htmlFor="my-input">Identificador da Turma</InputLabel>
                    <Input
                        onChange={(e) => {
                            setIdentificador(e.target.value)
                            
                        }}
                        value={identificador}
                        id="my-input" aria-describedby="my-helper-text" />
                    {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                </FormControl>




                <FormControl fullWidth 
                    sx={{
                        marginTop: "2vh"
                    }}>
                    <InputLabel id="demo-simple-select-label">Sala</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Ano"
                        onChange={(e) => {


                            setSala(e.target.value)
                           




                        }}
                        value={sala}
                    >
                        {salas.map((item, idx) => {

                           

                            return <MenuItem key={idx} value={item.id}>{item.numero}</MenuItem>


                        })}
                    </Select>
                </FormControl>



                <Button type='submit' sx={{ marginTop: "2vh", background: "#002F78", color: "#ffffff" }} fullWidth>CADASTRAR</Button>
            </form>

        </Box>


    )


}

{/* <Box
            sx={{

                width: "80vw",
                textAliugn: "Center"


            }}
        >
            <Typography sx={{ marginTop: "5vh", color: "#000000" }}>MATRICULAR ALUNO</Typography>




            <form
                onSubmit={(e) => {

                    e.preventDefault()

                    matriculaAluno()
                }}
            >

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Serie</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Ano"
                        onChange={(e) => {


                            setSerie(e.target.value)                            
                            
                           
                            
                            
                            
                        }}
                        value={serie}
                    >
                        {series.map((item, idx) => {

                            

                            return <MenuItem key={idx} value={item.id}>{item.serie}</MenuItem>
                            

                        })}
                    </Select>
                </FormControl>



                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sala</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Ano"
                        onChange={(e) => {


                            setSala(e.target.value)                            
                           
                           
                            
                            
                            
                        }}
                        value={sala}
                    >
                        {salas.map((item, idx) => {

                            

                            return <MenuItem key={idx} value={item.id}>{item.sala}</MenuItem>
                            

                        })}
                    </Select>
                </FormControl>



                <Button type='submit' sx={{ marginTop: "2vh", background: "#002F78", color: "#ffffff" }} fullWidth>CADASTRAR</Button>
            </form>

        </Box> */}