import { ReactTinyLink } from "@artshell/react-tiny-link";
import { Typography } from '@mui/material';

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
            <ReactTinyLink
                cardSize="small"
                showGraphic={false}
                maxLine={2}
                minLine={1}
                url="https://bajainnotech.github.io/bit-mysteries/"
            />
            <br />
        </>
    );
}

export default Mysteries;