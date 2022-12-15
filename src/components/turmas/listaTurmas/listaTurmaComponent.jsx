
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

import  jwt  from "jsonwebtoken";

export default function ListaTurmasComponent({ turmas }) {

    const [autorizacao, setAutorizacao] = useState(0)

    const [salas, setSalas] = useState([])

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const router = useRouter();

    const chaveDecodificada = jwt.decode(TOKEN_IRIS_CLIENT);
    setAutorizacao(chaveDecodificada)

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
                }>Turmas</Typography>
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

                {autorizacao === 1 ?

                    <Button
                        onClick={() => {
                            router.push('/turmas/cadastro');
                        }}

                        sx={
                            {
                                background: '#002F78',
                                color: "#ffffff",
                                marginLeft: "2vw",
                                marginTop: "2vh"

                            }
                        }>NOVA TURMA</Button>

                    :

                    ""



                }

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
                            {turmas.map((row, key) => (
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

                                        {row.Series.serie}º {row.identificador}

                                    </TableCell>
                                    <TableCell align="left" sx={
                                        {
                                            border: 'none'
                                        }
                                    }>


                                    </TableCell>

                                    {<Link href={"/salas-de-aula/alunos-por-sala/" + row.id}><Button sx={
                                        {
                                            background: '#002F78',
                                            color: '#ffffff'
                                        }
                                    }>Entrar na sala</Button></Link>}


                                </TableRow >
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>




        </Box>
    )
}