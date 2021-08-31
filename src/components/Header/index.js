import React from 'react'
import RMDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"
import {Wrapper, Content, LogoImg, TMDBLogoImg} from "./Header.style"
import {Link} from "react-router-dom";

function Header() {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                <h1>Mini-movies</h1>
                </Link>
            </Content>
        </Wrapper>
    )
}

export default Header
