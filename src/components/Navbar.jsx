import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import CartLogo from "../assets/icon-cart.svg"
import AvatarImage from "../assets/image-avatar.png"

const S = {
    NavbarContainer : styled.nav`
        background-color: gray;
        display: flex;
        flex-direction: column;
        height: 80px;
        position: fixed;
        top: 0;
        width: 100vw;
    `,
    LeftContainer : styled.div`
        flex: 70%;
        display: flex;
        align-items: center;
        padding-left: 5%;
        background-color: red;
    `,    
    NavbarInnerContainer : styled.div`
        display: flex;
        height: 80px;
        position: fixed;
        top: 0;
        width: 100vw;
    `, 
    NavbarLogo : styled.img`
        height: 40px;
        width: auto;
        margin-right: 10px;
    `,
    NavbarLinkContainer: styled.div`
        display: flex;
    `,
    NavbarLink: styled(Link)`
        color: white;
        font-size: 25px;
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        margin: 10px;
    `,    
    RightContainer : styled.div`
        flex: 30%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 5%;
        background-color: salmon;
    `,
    CartLogo : styled.img`
        height: 40px;
        width: auto;
        margin: 10px;
    `,
    Avatar : styled.img`
        height: 50px;
        width: auto;
        margin: 10px;
    `,
    NavbarExtendedContainer : styled.div`
    
    `
}


function Navbar() {
    return <S.NavbarContainer>
        <S.NavbarInnerContainer>
            <S.LeftContainer>
                <S.NavbarLogo src={Logo}></S.NavbarLogo>
                <S.NavbarLinkContainer>
                    <S.NavbarLink to="/">Home</S.NavbarLink>
                    <S.NavbarLink to="/about">Men</S.NavbarLink>
                    <S.NavbarLink to="/about">Women</S.NavbarLink>
                    <S.NavbarLink to="/about">About</S.NavbarLink>
                    <S.NavbarLink to="/contact">Contact</S.NavbarLink>
                </S.NavbarLinkContainer>                    
            </S.LeftContainer>
            <S.RightContainer>
                <S.CartLogo src={CartLogo}></S.CartLogo>
                <S.Avatar src={AvatarImage}></S.Avatar>
            </S.RightContainer>
        </S.NavbarInnerContainer>

        <S.NavbarExtendedContainer>

        </S.NavbarExtendedContainer>
        
    </S.NavbarContainer>
}

export default Navbar;