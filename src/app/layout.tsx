"use client";

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}>
            <body style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
