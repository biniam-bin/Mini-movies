import styled from "styled-components"


export const Wrapper = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    padding: 0 20px;
    background: #000;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    border-radius: 40px;
    background: var(--midGrey);
    margin: 0 auto;
    color: #fff;

    img {
        position: absolute;
        width: 30px;
        left: 15px;
        top: 14px;
    }
    input {
        position: absolute;
        width: 96%;
        left: 0;
        font-size: 28px;
        margin: 8px 0;
        padding: 0 0 0 60px;
        height: 40px;
        color: #000;
        background: transparent;
        border: 0;

        :focus{
            outline: none;
        }
    }
`;