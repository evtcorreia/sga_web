import { useEffect, useState } from "react";
import Menu from "../../../src/components/menu-lateral";
import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";
import { Container, Input, Button, Box } from '@mui/material';
import InfoAlunoComponent from "../../../src/components/alunos/info";
import BoxNome from "../../../src/components/alunos/boxNomeAluno";
import BoxFuncoes from "../../../src/components/boxFuncoes";

/* export async function getStaticProps(){
  

  const res = await fetch(`${url}v1/aluno/1`);
  const data = await res.json()
  console.log(data);
  return {
    props:{
      data:data
    }
  }
  
} */ 

export default function InfoAluno(){

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



    const aluno = {
      nome: nome,
      dt_nascimento: dt_nascimento,
      logradouro: logradouro,
      bairro: bairro,
      numero: numero,
      complemento: complemento,
      identificadorTurma: identificadorTurma,
      serie:serie
    }
   
useEffect( ()=>{

consulta()


},[])

async function consulta(){

  const id =  router.query.info 
  const res =  await fetch(`${url}v1/aluno/${id}`);
  const data = await  res.json()
  console.log(data);
 // setTimeout(()=>{

    setNome(data.Pessoa.nome),
    set_dtNascimento(data.Pessoa.dt_nascimento),
    setbairro(data.Pessoa.Endereco.bairro),
    setLogradouro(data.Pessoa.Endereco.logradouro),
    setNumero(data.Pessoa.Endereco.numero),
    setComplemento(data.Pessoa.Endereco.complemento)

    setIdentificadorTurma(data.Matricula.Turma.identificador)
    setSerie(data.Matricula.Turma.Series.serie)
   


 // },"1000")


}
    
    
    

    return(

        <Box  sx={
            {
                display:'flex',
                textAlign:'center'
            }
        }>
            <Menu />
            <Box>
              <BoxNome aluno = {aluno} /> 
              <BoxFuncoes aluno = {aluno}/>
              <InfoAlunoComponent aluno = {aluno} /> 
            </Box>

            

            


        </Box>
    )
}