import React from 'react'
import {Link} from "react-router-dom"
import {Wrapper, Content} from "./BreadCramb.styles"

function BreadCramb({movieTitle}) {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>:</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    )
}

export default BreadCramb
