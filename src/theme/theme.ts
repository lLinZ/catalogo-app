import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: ["Kunit", 'arial'].join(','),
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#27272f',
        },
        secondary: {
            main: '#00f548',
        },
        success: {
            main: '#00c853',
        },
        error: {
            main: '#ff1744',
        },
    },
});