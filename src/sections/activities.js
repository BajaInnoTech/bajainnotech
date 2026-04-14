import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import gameBannerShort from "../assets/images/gameBannerShort.png";

function Mysteries() {
    return (
        <Container>
            <Box sx={{margin:4}}>
                <Typography variant="h3" sx={{ color: "primary.dark"}}>
                    BIT Activities
                </Typography>
            </Box>
            <Typography>At BajaInnoTech we strive to foster our creativity and find innovative ways to leverage our technical skills while providing a social benefit that transcend our professional circles:</Typography>
            <Box sx={{display:'flex', margin:3}} >
                <Card variant="outlined" sx={{width:700, marginBottom:1, alignContent:'center', justifySelf:'center'}}>
                    <CardActionArea component="a"
                        href="https://bajainnotech.github.io/bit-mysteries/"
                        target="_blank"
                    >
                    <CardMedia
                        sx={{ borderRadius:1.5, justifySelf:'center', height: 272, width: 680, objectFit: 'contain'}}
                        image={gameBannerShort}
                    />
                        <CardContent>
                            <Box>
                                <Typography variant="h4">BIT Mysteries</Typography>
                                <Typography gutterBottom sx={{color:"secondary.dark"}}>Recreation is a click away!</Typography>
                                <Typography>Have some spare time, or need a bit of time out? Checkout BIT Mysteries, you'll find open source Table-Top RPGs and other means to pass the time.</Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Container>
    );
}

export default Mysteries;