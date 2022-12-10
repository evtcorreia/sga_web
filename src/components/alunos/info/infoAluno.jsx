import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";











export default function InfoAlunoComponent({ aluno }) {
  const [value, setValue] = React.useState('1');


  const router = useRouter();     

    const id = router.query.info 

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO    

    //const [alunoRes, setAlunoRes] = React.useState()

    //console.log(alunoRes);

    /* 
    React.useEffect(() => {     
        

        consulta()

       

       
 

    }, []) */


    

  
  
  //const [aluno, setAluno] = React.useState(alunoRes.Pessoa.nome)

/* setTimeout(()=>{
  
}, "10000") */

//console.log(alunoRes.Pessoa.nome)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Dados Pessoasis" value="1" />
            <Tab label="Endereço" value="2" />
            <Tab label="Responsável" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Box
                sx={
                    {
                        color: "#000000",
                        display:"flex",
                        justifyContent: "space-around"
                    }
                }>

                    <Box>

                    {console.log("alunoRe")}
                        Nome Completo: {aluno.nome}
                        
                    </Box>
                 
                    <Box>
                        Data de nascimento {aluno.dt_nascimento}
                    </Box>
                </Box>
        </TabPanel>
        <TabPanel value="2">
          
        <Box
                sx={
                    {
                        color: "#000000",
                        display:"flex",
                        justifyContent: "space-around"
                    }
                }>

                    <Box>

                    {console.log("alunoRe")}
                       Rua: {aluno.logradouro}
                        
                    </Box>
                 
                    <Box>
                        Numero: {aluno.numero}
                    </Box>
                </Box>
                <Box
                sx={
                    {
                        color: "#000000",
                        display:"flex",
                        justifyContent: "space-around"
                    }
                }>

                    <Box>

                    {console.log("alunoRe")}
                       Bairro: {aluno.bairro}
                        
                    </Box>
                 
                    <Box>
                        Complemento: {aluno.complemento}
                    </Box>
                </Box>

        </TabPanel>
        <TabPanel value="3">

        <Box
                sx={
                    {
                        color: "#000000",
                        display:"flex",
                        justifyContent: "space-around"
                    }
                }>

                    <Box>

                    {console.log("alunoRe")}
                        Nome Completo: {aluno.nome}
                        
                    </Box>
                 
                    <Box>
                        Data de nascimento {aluno.dt_nascimento}
                    </Box>
                </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}


