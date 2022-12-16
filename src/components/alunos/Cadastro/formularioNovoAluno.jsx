import React, {useState}  from 'react'
import nookies from 'nookies'
import axios from 'axios';
import Router from 'next/router';

import { Container, Input, Button, Box, FormControl, InputLabel, FormHelperText, Typography } from '@mui/material';

export default function FormularioNovoAluno() {



    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()
    const [nascimento, setNascimento] = useState()
    const [rua, setRua] = useState()
    const [bairro, setBairro] = useState()
    const [numero, setNumero] = useState()
    const [complemento, setComplemento] = useState()
    const [municipio, setMunicipio] = useState()

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO



    function gravaAluno(){

       
        

        var postData = {
            nome: nome,
            cpf: cpf,
            dt_nascimento: nascimento,
            logradouro:rua,
            bairro:bairro,
            numero:numero,
            complemento:complemento,
            municipio:1
          };
          
          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                //"Access-Control-Allow-Origin": "*",
                'Authorization': TOKEN_IRIS_CLIENT
            }
          };
          
          axios.post(`${url}v1/alunos/matricular`, postData, axiosConfig)
          .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            Router.push('/alunos')
          })
          .catch((err) => {
            console.log("AXIOS ERROR coletado: ", err);
            Router.push('/')
            
          })





    }

    return (

        <Box
        sx={{

            width:"80vw",
            textAliugn:"Center"


        }}
        >


            <Typography sx={{marginTop:"5vh",color:"#000000"}}>CADASTRO DE ALUNOS</Typography>

            <form 
                onSubmit={(e)=>{

                    e.preventDefault()
                    
                    gravaAluno()
                }}
            >
                

            <FormControl
            required={true}
                fullWidth
                sx={{
                    marginTop:"2vh"
                }}
                >
                <InputLabel htmlFor="my-input">Nome</InputLabel>
                <Input 
                    onChange={(e)=>{
                        setNome(e.target.value)
                        
                    }}
                    value={nome}
                    id="my-input" aria-describedby="my-helper-text" />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>

            <FormControl
            required={true}
                fullWidth
                sx={{
                    marginTop:"4vh"
                }}
                >
                <InputLabel                
                   
                    htmlFor="my-input">CPF</InputLabel>
                <Input 
                     onChange={(e)=>{
                        setCpf(e.target.value)
                    }}
                    value={cpf}
                id="my-input" aria-describedby="my-helper-text" />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>

            <FormControl
            required={true}
                fullWidth
                sx={{
                    marginTop:"4vh"
                }}
            >
                <InputLabel 
                
                
                htmlFor="my-input">Data de Nascimento</InputLabel>
                <Input
                    type='date'
                     onChange={(e)=>{
                        setNascimento(e.target.value)
                    }}
                    value={nascimento}
                id="my-input" aria-describedby="my-helper-text" />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>

            <FormControl
            required={true}
                fullWidth
                sx={{
                    marginTop:"4vh"
                }}
            >
                <InputLabel htmlFor="my-input">Rua</InputLabel>
                <Input 
                     onChange={(e)=>{
                        setRua(e.target.value)
                    }}
                    value={rua}
                id="my-input" aria-describedby="my-helper-text" />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl
            required={true}
                fullWidth
                sx={{
                    marginTop:"4vh"
                }}
                >
                <InputLabel htmlFor="my-input">Bairro</InputLabel>
                <Input
                     onChange={(e)=>{
                        setBairro(e.target.value)
                    }}
                    value={bairro}
                
                id="my-input" aria-describedby="my-helper-text" />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl
            required={true}
                fullWidth
                sx={{
                    marginTop:"4vh"
                }}
            >
                <InputLabel htmlFor="my-input">Numero</InputLabel>
                <Input 
                     onChange={(e)=>{
                        setNumero(e.target.value)
                    }}
                    value={numero}
                id="my-input" aria-describedby="my-helper-text" />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl
            required={true}
                fullWidth
                sx={{
                    marginTop:"4vh"
                }}
                >
                <InputLabel htmlFor="my-input">Complemento</InputLabel>
                <Input 
                     onChange={(e)=>{
                        setComplemento(e.target.value)
                    }}
                    value={complemento}
                id="my-input" aria-describedby="my-helper-text" />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
           {/*  <FormControl
                fullWidth
                sx={{
                    marginTop:"4vh"
                }}
            >
                <InputLabel htmlFor="my-input">Municipio</InputLabel>
                <Input 
                     onChange={(e)=>{
                        setMunicipio(e.target.value)
                    }}
                    value={municipio} */}
              {/*   id="my-input" aria-describedby="my-helper-text" /> */}
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            {/* </FormControl> */}

            <Button type='submit' sx={{marginTop:"2vh", background:"#002F78", color:"#ffffff"}} fullWidth>CADASTRAR</Button>
            </form>

        </Box>
    )
}