import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light:  '#EDD1B0ff',
            main: 'rgb(70, 124, 218)',
            dark: '#494345ff',
            contrastText: '#FCC585ff'
            //--apricot-cream-2: #F9CE9Aff;
        },
        secondary: {
            light:  '#e4dacb',
            main: '#f9ce9a',
            dark: '#727183',
            contrastText: '#edd1b0'
        },
    }
});

export default theme;
