import { ThemeProvider } from "@emotion/react"

const tema = {
    cores:{
        branco: "#FFFFFF",
        alerta: "#E21818",
        over: "#97FEEA",
        primarias:{
            cor01: "#071952",
            cor02: "#0B666A"
            
        },
        secundarias:{
            cor01: "#35A29F",
            cor02: "#97FEED"
        },
        dark:{
            cor01: "#18122B",
            cor02: "#393053"
        }
    },
    espacamentos:{
        xxs: "4px",
        xs: "8px",
        s: "16px",
        m: "24px",
        l: "32px",
        xl: "48px",
        xxl: "64px"
    },
    fontes:{
        principal: "'Lato',sans-serif"
    }
}

export const ProvedorTema = ({children}) => {
    return(
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}