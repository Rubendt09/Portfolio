import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%',
                },
                body: {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#0B1620', // Fondo por defecto
                },
                '#__next': {
                    width: '100%',
                    height: '100%',
                },
            },
        },
    },
});

export default theme;
