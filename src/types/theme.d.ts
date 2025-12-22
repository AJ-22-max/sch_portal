// import React from 'react';
import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
    interface Palette {
        base: {
            main: string;
            light: string;
            dark: string;
            customMain: string;
            customDark: string;
        };
    }

    interface PaletteOptions {
        base?: {
            main: string;
            light: string;
            dark: string;
            customMain?: string;
            customDark?: string;
        };
    }

    //     interface TypographyVariants {
    //         hero1: React.CSSProperties;
    //         hero2: React.CSSProperties;
    //         hero3: React.CSSProperties;
    //         chip: React.CSSProperties;
    //         caption1: React.CSSProperties;
    //     }

    //     interface TypographyVariantsOptions {
    //         hero1?: React.CSSProperties;
    //         hero2?: React.CSSProperties;
    //         hero3?: React.CSSProperties;
    //         chip?: React.CSSProperties;
    //         caption1?: React.CSSProperties;
    //     }
    // };

    // declare module '@mui/material/Typography' {
    //     interface TypographyPropsVariantOverrides {
    //         hero1: true;
    //         hero2: true;
    //         hero3: true;
    //         chip: true;
    //         caption1: true;
    //     }
}