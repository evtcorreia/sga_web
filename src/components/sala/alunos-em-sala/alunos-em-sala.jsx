
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
import Link from 'next/link';

export default function AlunosSalaComponent({alunos}) {
    


    const router  = useRouter()

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
                }>Sala de aula {router.query.alunos}</Typography>
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
                            {alunos.map((row, key) => (
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

                                        {row.Pessoa.nome}

                                    </TableCell>
                                    <TableCell align="left" sx={
                                        {
                                            border:'none'
                                        }
                                    }>
                                        Matricula: {row.Matricula.id} 

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


export async function getStaticProps() {



    let alunos = teste 
    axios.get(`${url}v1/aluno/sala/${router.query.alunos}`, {
        headers: {

            'Authorization': TOKEN_IRIS_CLIENT
        }
    })
        .then(res => {

          
      
        })
        .catch((erro) => {

            if (erro.response.status === 401) {
                router.push('/');
            };

        })
    return {
      props: {
        resAlunos: alunos
      },
    };
  }