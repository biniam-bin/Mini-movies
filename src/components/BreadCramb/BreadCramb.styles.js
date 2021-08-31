import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--midGrey);
    height: 50px;
`;
export const Content = styled.div`
    display: flex;
    padding: 0 20px;
    width: 100%;
    max-width: var(--maxWidth);
    span{
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-width: 768px;){
            font-size: var(--fontSmall);
        }
    }

`;