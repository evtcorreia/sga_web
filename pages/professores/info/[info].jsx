import React,{useState, useEffect} from 'react'
import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";
import InfoProfessorComponent from '../../../src/components/professores/info';
import { Container, Input, Button, Box } from '@mui/material';
import Menu from "../../../src/components/menu-lateral";
import BoxNomeProfessor from '../../../src/components/professores/boxNomeAluno';
import BoxFuncoesProfessor from '../../../src/components/professores/boxFuncoes';

export default function InfoProfessor() {
    const router = useRouter();



    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO

    const [nome, setNome] = useState('')
    const [dt_nascimento, set_dtNascimento] = useState('')
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setbairro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [identificadorTurma, setIdentificadorTurma] = useState('')
    const [serie, setSerie] = useState('')
    const [matricula, setMatricula] = useState('')
    const [masp, setMasp] = useState('')
    const [id, setId] = useState('')



    const professor = {
        nome: nome,
        dt_nascimento: dt_nascimento,
        logradouro: logradouro,
        bairro: bairro,
        numero: numero,
        complemento: complemento,
        masp: masp,
        id:id
  
    }

    useEffect(() => {

        consulta()


    }, [professor])

    async function consulta() {

        const id = router.query.info
        const res = await fetch(`${url}v1/professor/${id}`);
        const data = await res.json()

        console.log(res);

       


        setNome(data.Pessoa.nome),
            set_dtNascimento(data.Pessoa.dt_nascimento),
            setbairro(data.Pessoa.Endereco.bairro),
            setLogradouro(data.Pessoa.Endereco.logradouro),
            setNumero(data.Pessoa.Endereco.numero),
            setComplemento(data.Pessoa.Endereco.complemento)
            setMasp(data.masp)
            setId(id)

 

    }




    return (

        <Box sx={
            {
                display: 'flex',
                textAlign: 'center'
            }
        }>
            <Menu />
            <Box>
                <BoxNomeProfessor  professor={professor}/>
                <BoxFuncoesProfessor  professor={professor}/>      
                <InfoProfessorComponent professor={professor}/>
            </Box>






        </Box>
    )
}