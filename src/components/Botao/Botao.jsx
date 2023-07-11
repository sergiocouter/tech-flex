import styled from "@emotion/styled"

const BotaoPrimario = styled.button`
    background: ${props => props.theme.cores.secundarias.cor01};
    color: ${props => props.theme.cores.branco};
    border-radius: ${props => props.theme.espacamentos.s};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    border: none;
    &:hover {
        background: ${props => props.theme.cores.dark.cor01};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.dark.cor02};
    }
`

const BotaoSecundario = styled.button`
    background: transparent;
    color: ${props => props.theme.cores.branco};
    border: 2px solid ${props => props.theme.cores.dark.cor01};
    border-radius: ${props => props.theme.espacamentos.s};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        border-color: ${props => props.theme.cores.secundarias.cor02};
        color: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.focus};
    }
`

export const Botao = ({ children, variante = 'primaria' }) => {
    if (variante === 'primaria') {
        return <BotaoPrimario>
            {children}
        </BotaoPrimario>
    }
    return <BotaoSecundario>
        {children}
    </BotaoSecundario>
}