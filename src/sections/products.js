import { Box, Typography } from '@mui/material';
// import vpicon from '../assets/images/vpicon.svg'
import vpiconv2 from '../assets/images/vpiconv2.svg'

function Products() {
    return (
        <>
            <br />
            <Typography variant="h4" align='center' sx={{ color: "primary.contrastText"}}>Coming Soon!</Typography>
            <div style={{paddingTop:24}}/>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'120'}>
                <img src={vpiconv2} width={150} alt='V.P. Logo'/>
                    <div style={{margin:12}} />
                <Typography variant="h3" sx={{ color: "primary.dark"}}>
                    Visionary Planner
                </Typography>
            </Box>
            <br />
            <Typography variant='h6'>Our visionary planner will empower small & medium sized businesses to track their operations in a user friendly and accessible manner. This product is in advaced stages of development, with most features under real world testing.</Typography>
        </>
    );
}

export default Products;