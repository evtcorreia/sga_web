import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BoxNomeProfessor({ professor }) {

    return (

        <Box sx={
            {
                display:"flex",
                marginTop:"5vw",
                width: "80vw", 
                height: "30vh", 
                background: "#EEF1F5",
                flexDirection: "row",
                alignItems: "center"
            }}>
            <Typography variant="h4" component="h2" sx={{color:"#000000"}} >
                {professor.nome}
            </Typography>
        </Box>
    )
}