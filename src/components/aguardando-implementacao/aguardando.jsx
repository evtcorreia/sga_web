
import { useEffect, useState } from 'react';
import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";
import { Box, Button, Typography, TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Aguardando() {



    return (

        <Typography variant="h4" sx={
            {
                color:"blue",
                display:'flex',
                alignItems:'center'

            }
        }>Aguardando Implementação</Typography>

    )
}