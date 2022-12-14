import React, { useState } from 'react'

import nookies from 'nookies'
import axios from 'axios';

import { Container, Input, Button, Box, FormControl, InputLabel, FormHelperText, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



export default function FormularioMatricula({ anoLetivo, turmas, aluno }) {


    const [ano, setAno] = useState()
    const [anoExtenso, setAnoExtenso] = useState()
    const [turma, setTurma] = useState()


    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO



    function matriculaAluno() {

        

        


         var postData = {
            ano: "2022",
            turma_id: turma,
            status_matricula_id: 1, 
            ano_letivo_id: ano

        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                //"Access-Control-Allow-Origin": "*",
                'Authorization': TOKEN_IRIS_CLIENT
            }
        };

        axios.post(`${url}v1/aluno/alocar/${aluno}`, postData, axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
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
            <Typography sx={{ marginTop: "5vh", color: "#000000" }}>MATRICULAR ALUNO</Typography>




            <form
                onSubmit={(e) => {

                    e.preventDefault()

                    matriculaAluno()
                }}
            >

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Ano Letivo</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Ano"
                        onChange={(e) => {


                            setAno(e.target.value)                            
                       
                           
                            
                            
                            
                        }}
                        value={ano}
                    >
                        {anoLetivo.map((item, idx) => {

                            

                            return <MenuItem key={idx} value={item.id}>{item.ano}</MenuItem>
                            

                        })}
                    </Select>
                </FormControl>



                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Ano Letivo</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Ano"
                        onChange={(e) => {


                            setTurma(e.target.value)                            
                         
                           
                            
                            
                            
                        }}
                        value={turma}
                    >
                        {turmas.map((item, idx) => {

                           

                            return <MenuItem key={idx} value={item.id}>{item.Series.serie}º{item.identificador}</MenuItem>
                            

                        })}
                    </Select>
                </FormControl>



                <Button type='submit' sx={{ marginTop: "2vh", background: "#002F78", color: "#ffffff" }} fullWidth>CADASTRAR</Button>
            </form>

        </Box>
    )
}