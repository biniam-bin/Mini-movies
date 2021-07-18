import styled from "styled-components"

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    object-fit: cover;
    border-radius: 20px;
    padding: 5px;
    transition: all 0.3s;
    animation: animateThumb 2s;
    border: 1px black;
    :hover{
        transform: scale(1.08);
        z-index: 2;
    }

    @keyframes animateThumb {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;