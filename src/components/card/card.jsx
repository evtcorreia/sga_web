import { Container, Card  } from '@mui/material';
import Image from 'next/image';


export default function CardElement({card}){

    
    return(

        <>
        
        
            <Card 
                

            
            
            sx={
                {
                    display:'flex',
                    height:340,
                    width:450,
                    background:'#002F78',
                    marginTop:6,  
                }
            } >
                
                
                <Image
                src={card}
                width={600}
                height={600}
                
                />
                
            </Card >


        </>
    )
}