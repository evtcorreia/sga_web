import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Menu from "../../../src/components/menu-lateral";
import FormularioAlteracaoAluno from "../../../src/components/alunos/AlteracaoAluno";


import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";


export default function FormularioMudarAluno(){
    
    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')
    
    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT
    
    const url = process.env.URL_PRODUCAO
    
    const router = useRouter();     
    
    const [nome, setNome] = useState('')
    const [dt_nascimento, set_dtNascimento] = useState('')
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setbairro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [idPessoa, setIdPessoa] = useState('')
    const [cpf, setCpf] = useState('')
    
    
    const aluno = {
        nome: nome,
        dt_nascimento: dt_nascimento,
        logradouro: logradouro,
        bairro: bairro,
        numero: numero,
        complemento: complemento,
        id:idPessoa, 
        cpf:cpf
      }
      
      useEffect( ()=>{
        
        consulta()
        
        
      },[])
      
      async function consulta(){
        
        const id =  router.query.formulario 
            setIdPessoa(id)
          const res =  await fetch(`${url}v1/aluno/${id}`);
          const data = await  res.json()
        
          console.log(data);

          setTimeout(()=>{
        
            setNome(data.Pessoa.nome),
            set_dtNascimento(data.Pessoa.dt_nascimento),
            setbairro(data.Pessoa.Endereco.bairro),
            setLogradouro(data.Pessoa.Endereco.logradouro),
            setNumero(data.Pessoa.Endereco.numero),
            setComplemento(data.Pessoa.Endereco.complemento)
            setCpf(data.Pessoa.cpf)
            setIdPessoa(data.id)
        
           
        
        
          },"1000")
        
        
        }
    

    return(

       <Box sx={
        {
            display:'flex',
            textAlign:'center'
        }
    }>

            <Menu/>
            <FormularioAlteracaoAluno aluno = {aluno} id = {idPessoa}/>

       </Box>
    )


}