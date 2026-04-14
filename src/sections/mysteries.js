import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import gameBannerShort from "../assets/images/gameBannerShort.png";

function Mysteries() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                Bit Mysteries
            </Typography>
            <br />
            <Typography>At BajaInnoTech we strive to foster our creativity and find innovative ways to further our technical skills recreationally, we provide this as open source content. This can be seen at our companion leisure site: </Typography>
            <br />

            <Card variant="outlined" sx={{width:700, marginBottom:1, alignContent:'center', justifySelf:'center'}}>
                <CardActionArea component="a"
                    href="https://bajainnotech.github.io/bit-mysteries/"
                    target="_blank"
                >
             {/* <Box color="primary.dark" component="a" imageUrl={gameBannerShort} sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer"> */}
   
                {/* <img
                    height="120em"
                    src={gameBannerShort}
                    "https://bajainnotech.github.io/bit-mysteries/"
                 /> */}
                 <CardMedia
                    sx={{ borderRadius:1.5, justifySelf:'center', height: 272, width: 680, objectFit: 'contain'}}
                    image={gameBannerShort}
                 />
                <CardContent>

                        <Box>
                            <Typography variant="h4">Recreation is a click away!</Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>You'll find TTRPGs and other sources of recreation</Typography>
                            <Typography>Have some spare time, or need a bit of time out? Checkout BIT Mysteries, you'll find TTRPGs and other means to pass the time.</Typography>
                        </Box>
                                          
                </CardContent>

                    {/* </Box> */}
</CardActionArea>
            </Card>
        </>
    );
}

export default Mysteries;