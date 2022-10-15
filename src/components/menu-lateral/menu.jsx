import React, { useEffect, useState } from "react";
import {  Box, MenuList, MenuItem, Button   } from '@mui/material';
import Image from "next/image";
import LogoBranca from "./../../../public/images/logo/Logo-Branca.svg"
import { Router, useRouter } from "next/router";
import getMenuSecretaria from "../../../pages/api/menuSecretaria";
import getMenuProfessor from "../../../pages/api/menuProfessor";
import nookies from 'nookies'
import  jwt  from "jsonwebtoken";
import decodeJwt from "../../../pages/api/decodeJwt";








export default function Menu(){


    const [acesso, setAcesso] = useState('')
    const [result, setResult] = useState([])

    useEffect(()=>{
        

        const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')
  
        const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT
        
        
       
         const chaveDecodificada = jwt.decode(TOKEN_IRIS_CLIENT);

        
        if(chaveDecodificada == null){

            router.push('/')

        }else if(chaveDecodificada.autorizacao === 1){
                          
                setResult(getMenuSecretaria())
        }else if(chaveDecodificada.autorizacao === 2){

            setResult(getMenuProfessor())

        }else{
            router.push('/')      
    } 

    }, [])

   

    
    const url = process.env.URL_PRODUCAO

    const router = useRouter();

    
  
    return(
        <Box
            height='100vh'
            min width='15vw'
            sx={
                {
                    background: '#002F78',
                    maxWidth:300 ,
                    minHeight:100,
                    marginRight:'2vw'
                }
            }
        >
            <Image
                src={LogoBranca}
                width= {85}
                height={150}
            />
            
            <MenuList>

            {result.map((item, index)=>{
                return <MenuItem 
                    key={index} 
                    onClick={
                        ()=>{
                            router.push(item.link);
                        
                            
                        }
                    } 
                >
                    {item.nome}
                </MenuItem>
            })}


            </MenuList>

            <Button
                onClick={()=>{
                    nookies.destroy(null, "TOKEN_IRIS_CLIENT" )
                    router.push('/')
                }}
                sx={
                    {
                        marginTop:20
                    }
                }
            >Sair</Button>
        
            

        </Box>
    )
}