import styled from "@emotion/styled"

const EstiloCard = styled.div`
    padding: 32px;
    background: #35A29F;
    border: 2px solid #97FEED;
    border-radius: 16px;
`

export const Card = ({ children }) =>{
    return(
        <EstiloCard>
            {children}
        </EstiloCard>
    )
}