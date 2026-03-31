import { Box, Typography } from '@mui/material';
import bitLogoDetailed from '../assets/images/bitLogoDetailed.svg'

function Main() {
    return (
        <>
            <div style={{paddingTop:24}}/>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'120'}>
                <img src={bitLogoDetailed} width={180} alt='B.I.T. Logo'/>
                <div style={{margin:12}} />
                <Typography variant="h3" sx={{ color: "primary.dark"}}>
                    Welcome to BajaInnoTech!
                </Typography>
            </Box>
            <br />
            <Typography variant="h6">We are a new company founded by a team of senior developers headquartered in Baja California. We are driven by a desire to produce high quality software products that benefit us as much as those around us. To this end, we keep a watchful eye on technological developments. We found that this up-to-date knowledge when backed by creativity, diligence, passion and experience allows us to produce optimal quality products.</Typography>
        </>
    );
}

export default Main;