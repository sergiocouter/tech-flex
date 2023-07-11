import styled from "@emotion/styled"

const EstiloCard = styled.div`
    padding: ${props => props.theme.espacamentos.l};
    background: ${props => props.theme.cores.primarias.cor02};
    border: 2px solid ${props => props.theme.cores.secundarias.cor02};
    border-radius: ${props => props.theme.espacamentos.s};
`

export const Card = ({ children }) =>{
    return(
        <EstiloCard>
            {children}
        </EstiloCard>
    )
}