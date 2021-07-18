import styled from "styled-components"

export const Spinner = styled.div`
    border: 2px solid var(--lightGrey);
    border-top: 2px solid var(--midGrey);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`;