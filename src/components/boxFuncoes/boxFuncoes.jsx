import {Box, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import InfoAluno from '../../../pages/alunos/info/[info]';

export default function BoxFuncoes({ aluno }) {

    return (
        <Box sx={
            {
               
                marginTop:"3vw",
                width: "80vw", 
                height: "20vh", 
                background: "#d3d3d3",
              
            }}>

            <Box sx={{textAlign:"left", marginLeft:"2vw"}}>

                
                <Typography sx={{color:'#002F78' }}>{aluno.serie}º {aluno.identificadorTurma} </Typography>
            </Box>
        <Box sx={
            {
                display:"flex",
                width: "80vw", 
                height: "15vh", 
                background: "#d3d3d3",
                flexDirection: "row",
                alignItems: "center"
            }}>
                
                
            
                <Button variant="text" sx={{background:"#002F78", color:"#ffffff", marginLeft:"4vh"}}> NOVA MATRICULA </Button>
           
        </Box>
                </Box>
    )
}