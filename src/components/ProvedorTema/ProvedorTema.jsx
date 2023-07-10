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
    }
}

export const ProvedorTema = ({children}) => {
    return(
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}