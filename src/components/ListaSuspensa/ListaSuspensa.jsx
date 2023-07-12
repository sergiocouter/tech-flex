import styled from "@emotion/styled";
import { useState } from "react"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;
    color: ${props => props.theme.cores.branco}

`

const BotaoEstilizado = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.aberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.aberta ? '0' : '18px'};
    margin-top: ${props => props.theme.espacamentos.xs};
    margin-bottom: ${props => props.theme.espacamentos.s};
    padding: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.secundarias.cor02};
    &:focus {
        border-color: ${props => props.theme.cores.over};
    }
`

const ItemListaSuspensaEstilizado = styled.li`
    padding: ${props => props.theme.espacamentos.xs} 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.cores.secundarias.cor02};
    cursor: pointer;       
    &:last-child {
        border: none;
    }
    color: ${props => props.focoAtivo ? props.theme.cores.over : "inherit"};
    &:hover {
        color: ${props => props.theme.cores.over};
    }
`

const ListaSuspensaEstilizada = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.cores.secundarias.cor01};
    z-index: 1;
    border: 1px solid ${props => props.theme.cores.secundarias.cor02};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top: none;
    margin: 0;
    padding: 0 ${props => props.theme.espacamentos.m};
    list-style: none;
`

export const ListaSuspensa = ({titulo, opcoes}) => {
    
    const [aberta, setAberta] = useState(false);

    const [foco, setFoco] = useState(null);

    const [selecionada, setSelecionada] = useState(null);

    const manipularTeclaTeclado = (e) =>{
        setAberta(true)
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setFoco(focoAntigo => {
                    if (focoAntigo == null){
                        return 0;
                    }
                    return focoAntigo += 1
                })
                break;
            case "ArrowUp":
                e.preventDefault();
                setFoco(focoAntigo => {
                    if (!focoAntigo){
                        return 0;
                    }
                    return focoAntigo -= 1
                })
                break;
            case "Enter":
                e.preventDefault();
                setFoco(null)
                setAberta(false)
                setSelecionada(opcoes[foco])

                break;
        
            default:
                break;
        }
    }

    return(       
        <LabelEstilizada>
            {titulo}
            <BotaoEstilizado 
                aberta={aberta}  
                onClick={() => setAberta(!aberta)}
                onKeyDown={manipularTeclaTeclado}
            
            >
                <div>
                    {selecionada ? selecionada.text : "Selecione"}
                </div>
                <div>
                    <span>{aberta ? '▲' : '▼'}</span>
                </div>
                
            </BotaoEstilizado>
            {aberta && <ListaSuspensaEstilizada>
                {opcoes.map((opcao, index) => <ItemListaSuspensaEstilizado 
                    key={opcao.value}
                    focoAtivo= {index === foco}
                    onClick={() => setSelecionada(opcao)}
                
                >
                    {opcao.text}
                </ItemListaSuspensaEstilizado>)}
            </ListaSuspensaEstilizada> }

        </LabelEstilizada>
    )
}