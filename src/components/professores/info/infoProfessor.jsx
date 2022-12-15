import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import nookies from 'nookies'
import axios from 'axios';
import {useRouter} from "next/router";


export default function InfoProfessorComponent({ professor }) {
  const [value, setValue] = React.useState('1');

  console.log(professor);

  const router = useRouter();     

    const id = router.query.info 

    const TOKEN = nookies.get('TOKEN_IRIS_CLIENT')

    const TOKEN_IRIS_CLIENT = TOKEN.TOKEN_IRIS_CLIENT

    const url = process.env.URL_PRODUCAO    



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
            <Tab label="Documentos" value="3" />
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

               
                        Nome Completo: {professor.nome}
                        
                    </Box>
                 
                    <Box>
                        Data de nascimento {professor.dt_nascimento}
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

                  
                       Rua: {professor.logradouro}
                        
                    </Box>
                 
                    <Box>
                        Numero: {professor.numero}
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

                   
                       Bairro: {professor.bairro}
                        
                    </Box>
                 
                    <Box>
                        Complemento: {professor.complemento}
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

                    
                       MASP: {professor.masp}
                        
                    </Box>
                 
                    <Box>
                      
                    </Box>
                </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}


