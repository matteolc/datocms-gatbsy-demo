import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    typography: {
        fontFamily: ['Gelasio', 'serif'].join(',')
    },
    palette: {
        divider: 'rgba(255,255,255,0.12)',
        common: {
            black: 'rgba(0, 0, 0, 1)',
            white: '#fff',
        },
        background: {
            paper: 'rgba(0, 0, 0, 1)',
            default: 'rgba(20, 20, 20, 1)',
        },
        primary: {
            light: '#7986cb',
            main: 'rgba(25, 100, 126, 1)',
            dark: '#303f9f',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f8547e',
            main: '#c01352',
            dark: '#89002a',
            contrastText: '#fff',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgba(255, 255, 255, 0.87)',
            secondary: 'rgba(243, 243, 243, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        }
    }
});

export default theme;
