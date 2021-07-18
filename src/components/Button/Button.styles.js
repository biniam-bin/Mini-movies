import styled from "styled-components"

export const Wrapper = styled.div`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: #fff;
    border: 0;
    z-index: 4;
    margin: 20px auto;
    transition: a11 0.3s;
    outline: none;
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
    p{
        position: relative;
        font-size: var(--fontBig);
        text-align: center;
        justify-content: center;
        bottom: 0;
    }
    
`;