import React, { useState } from "react";
import { Container, Input, Button, TextField, Typography } from '@mui/material';
//import { Input, Section, Button } from "./css";
import Image from "next/image";
import Logo from "./../../../public/images/logo/Logo-Azul.svg"
import {useRouter} from "next/router";
const axios = require('axios').default
import nookies from 'nookies'









export default function Login(){
    
    const url = process.env.URL_PRODUCAO
 

    
    const router = useRouter(); 
    
    var [codigo, setCodigo]  = useState('');
    var [senha, setSenha] = useState('');

    const [statusRes, setStatusRes] = useState('')
    
    async function Logar(){
     
        await axios.post(`${url}v1/login`, {
            login: codigo,
            senha: senha
        })
        .then(function (response) {      
           
            
            if(response.data.auth){

                nookies.set(null, "TOKEN_IRIS_CLIENT", response.data.token, {
                    path:'/',
                    maxAge:86400 * 7

                })
                router.push('/home');
            }
        })
        .catch(function (error) {
            setStatusRes(400)
        });       
        
    }
    
   


    function handleCodigo(e){

        const value = e.target.value;
        setCodigo(value)
        
    }


    function handleSenha(e){
        const value = e.target.value;
        setSenha(value)
        

    }

   
   return(
       
       
       
       <Container 
       
        maxWidth="sm"
        sx={
            {
                textAlign:'center'
            }
        }
        >
        
        <Image
                src={Logo}
                width={400}
                height={400}
                
                /> 
        <form
            onSubmit={(e)=>{
                e.preventDefault()
                Logar()

            }}
        >

            <Typography variant="h6" sx={
                {
                    color:'red',
                    marginBottom:4
                }
            } >{statusRes === 400 ? "Login ou senha invalidos" : ""}</Typography >

                <div>
                    <TextField
                    
                    id="codigo"
                    label="Usuario"
                    placeholder="Digite o Usuario"
                    value={codigo}
                    onChange={handleCodigo}
                    fullWidth
                    required
                    />
                </div>

                <div>
                    <TextField
                    
                    id="senha"
                    type={'password'}
                    label="Senha"
                    value={senha}
                    placeholder="Digite a Senha"
                    fullWidth
                    required
                    onChange={handleSenha}
                    sx={
                        {
                            marginTop:6
                        }
                    }
                    />
                </div>

                <Button 
                    variant="contained"
                    type="submit"
                    sx={
                        {
                            marginTop:5
                            
                        }
                    }
                    >Entrar</Button>


            </form>
        </Container>

        

    )
}