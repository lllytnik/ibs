import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#e97f03',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontSize: 18,
        fontFamily: 'Arial, sans-serif',
        fontWeightRegular: 400,
    },
});

export default theme;
