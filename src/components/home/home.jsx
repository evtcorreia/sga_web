import { Container, Button } from '@mui/material';
import { Router, useRouter } from "next/router";
import nookies from 'nookies'
import CardElement from "../card"

import { useEffect } from 'react';




export default function HomeComponent(){

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')
  
    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT
   

        const router = useRouter()
      
        useEffect(()=>{

            if(TOKEN_IRIS_CLIENT === undefined){

                
                router.push("/")
            }
    

        }, [])

    return(

        <Container
               // width='100vw'
                //height='100vh'
            sx={
                {   
                    height:'100vh',
                    display:'flex',
                    justifyContent:'space-between',       
                    background:'#ffffff'

                }
            }
        >

            <CardElement card = {CardIris}/>
            <CardElement card = {CardIris}/>
            <CardElement card = {CardIris}/>
            <CardElement card = {CardIris}/>
            
        

        </Container>
    )
}