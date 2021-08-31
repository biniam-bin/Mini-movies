import styled from "styled-components"
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config"


export const Wrapper = styled.div`
    background: ${({backdrop}) => 
        backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : "#00"
    };
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animaeInfo 2s;

    @keyframes animaeInfo {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;
export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px){
        display: block;
        max-height: none;
    }

`;
export const Text = styled.div`
    color: var(--white);
    width: 100%;
    padding: 20px 40px;
    overflow: hidden;

    .info{
        margin-top: 180px;
        .column > p{
            margin-top: 20px;
            height: 100%;
            font-size: 20px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
    }

    .rating-directors{
        display: flex;
        justify-content: flex-start;

    }

    .score{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
    }

    .director{
        margin: 0, 0, 0, 40px;

            padding-left: 10px;
        p {
            margin: 10px;
        }
    }

    h1 {
        @media screen and (max-width: 768px){
            font-size: var(--fontBig);
            
        }
    }
`;