import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --midGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontBig: 1.5rem;
        --fontSuperBig: 2.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        
        
    }

    * {
        box-sizing: border-box;
        font: "Abel", sans-serif;
        
        ::-webkit-scrollbar {
            width: 10px;
            transition: 1s all ease-in;
            z-index: 2;
            :hover{
                width: 13px;
        
            }
        }

        /* Track */
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        //border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: var(--midGrey);
        border-radius: 10px;
        }
    }

    body {  
        background-color: #000;
        margin: 0;
        padding: 0;
        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white)          
        }
        h3{
            font-size: 1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            color: var(--white);
        }
    }

` 