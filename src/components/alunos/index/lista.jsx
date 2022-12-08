

import { useEffect, useState } from 'react';
import nookies from 'nookies'
import axios from 'axios';
import { useRouter } from "next/router";
import { Box, Button, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';


export default function ListaAlunos({ alunos }) {

    console.log(alunos);

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
                }>ALUNOS</Typography>
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
                    onClick={() => {
                        router.push('/alunos/cadstra');
                    }}

                    sx={
                        {
                            background: '#002F78',
                            color: "#ffffff",
                            marginLeft: "2vw",
                            marginTop: "2vh"

                        }
                    }>NOVO ALUNO</Button>
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
                        marginLeft: '0vw'
                    }
                }>
                    <Table sx={{ minWidth: 100, border: 'none' }} size="" aria-label="a dense table">

                        <TableBody sx={
                            {
                                border: 'none'
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
                                            borderBottom: "solid #f8f8f8 8px"

                                        }
                                    }
                                >
                                    <TableCell component="th" scope="row" sx={
                                        {
                                            border: 'none'
                                        }
                                    }>

                                        <Link href={"/aluno/info" + row.id}><Button sx={
                                            {
                                                //background:'#002F78',
                                                color: '#002F78'
                                            }
                                        }>

                                            {row.Pessoa.nome}{row.Pessoa.sobrenome}

                                        </Button></Link>

                                    </TableCell>
                                    <TableCell align="left" sx={
                                        {
                                            border: 'none'
                                        }
                                        
                                    }>
                                         


                                    </TableCell>

                                    <Link href={"/salas-de-aula/alunos-por-sala/" + row.id}><Button sx={
                                        {
                                            //background:'#002F78',
                                            color: '#002F78'
                                        }
                                    }>{row.Matricula.Turma.Series.serie}{row.Matricula.Turma.identificador}</Button></Link>


                                </TableRow >
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>




        </Box>
    )
}