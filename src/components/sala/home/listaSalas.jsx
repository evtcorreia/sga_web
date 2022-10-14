
import { useEffect, useState } from 'react';
import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";
import { Box, Button, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function SalaComponent() {

    const [salas, setSalas] = useState([])

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const router = useRouter(); 

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
                }>Sala de Aula</Typography>
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

            <Box sx={
                {
                    color: "black",

                    textAlign: 'left'

                }
            }>
                <Button
                onClick={()=>{
                    router.push('/salas-de-aula/criar');
                }} 
                
                sx={
                    {
                        background: '#002F78',
                        color: "#ffffff",
                        marginLeft: "2vw",
                        marginTop: "2vh"

                    }
                }>NOVA SALA</Button>
            </Box>

            <Box sx={
                {
                    color: "black",
                    marginTop: '4vw',
                    textAlign: 'left',
                   
                    

                }
            }>

                <TableContainer component={Paper} sx={
                    {
                        marginLeft:'0vw'
                    }
                }>
                    <Table sx={{ minWidth: 100, border:'none' }} size="" aria-label="a dense table">
                        
                        <TableBody sx={
                            {
                                border:'none'
                            }
                        }>
                            {salas.map((row, key) => (
                                <TableRow
                                    key={key}
                                    sx={
                                        {
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            display: 'flex',
                                            justifyContent: "space-between",
                                            borderBottom:"solid #f8f8f8 8px"
                                            
                                        }
                                    }
                                >
                                    <TableCell component="th" scope="row" sx={
                                        {
                                            border:'none'
                                        }
                                    }>

                                        Sala: {row.numero}

                                    </TableCell>
                                    <TableCell align="left" sx={
                                        {
                                            border:'none'
                                        }
                                    }>

                                        <Button onClick={()=>{
                                            router.push('/salas-de-aula/criar');
                                        }} 
                                        sx={
                                            {
                                                background:'#002F78',
                                                color:'#ffffff'
                                            }
                                        }>Entrar NA SALA</Button>
                                    </TableCell>


                                </TableRow >
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>




        </Box>
    )
}