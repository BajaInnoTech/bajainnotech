import { ReactTinyLink } from "@artshell/react-tiny-link";
import { Card, CardContent, Typography } from '@mui/material';

function Mysteries() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                Bit Mysteries
            </Typography>
            <br />
            <Typography>At BajaInnoTech we strive to foster our creativity and find innovative ways to further our technical skills recreationally.</Typography>
            <br />
           <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">Fires In the Crypt - Solo Play Options</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                    <Typography>An adaptation of Sanglorian's first level adventure into a SOLO/COOP experience. This is a work in progress.</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://github.com/BajaInnoTech/fires-in-the-crypt-solo-play-options"
                    />
                </CardContent>
            </Card>

            {/* <Typography variant="h6">Fallen Kingom</Typography>
            <Typography variant="h6">Hunt for the Treasure of Aural Hall</Typography> */}
        </>
    );
}

export default Mysteries;