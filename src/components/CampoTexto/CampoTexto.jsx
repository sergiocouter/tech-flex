import styled from "@emotion/styled"

const EstiloLabel = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${props => props.theme.cores.branco}
`

const EstiloInput = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    height: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-top: ${props => props.theme.espacamentos.xs};
    margin-bottom: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.secundarias.cor02};
    border-radius: ${props => props.theme.espacamentos.s};
    
`

export const CampoTexto = ({titulo}) => {
    return(
        <EstiloLabel>
            {titulo}
            <EstiloInput />
        </EstiloLabel>
    )
}