import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BoxNome({ aluno }) {

    return (

        <Box sx={
            {
                display:"flex",
                marginTop:"5vw",
                width: "80vw", 
                height: "30vh", 
                background: "#d3d3d3",
                flexDirection: "row",
                alignItems: "center"
            }}>
            <Typography variant="h4" component="h2" sx={{color:"#000000"}} >
                {aluno.nome}
            </Typography>
        </Box>
    )
}