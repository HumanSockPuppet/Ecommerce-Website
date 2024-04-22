import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import CartLogo from "../assets/icon-cart.svg"
import AvatarImage from "../assets/image-avatar.png"

const S = {
    NavbarContainer : styled.nav`
        align-items: center;
        background: none;
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: fixed;
        top: 0;
        width: 100vw;
    `,
    LeftContainer : styled.div`
        align-items: center;
        display: flex;
        flex: 70%;
        padding-left: 0%;
    `,
    NavbarInnerContainer : styled.div`
        background-color: orange;
        display: flex;
        height: 80px;
        position: fixed;
        top: 0;
        width: 100vw;
    `,
    NavbarLogo : styled.img`
        height: 20px;
        margin: 10px;
        margin-left: 20px;
        width: auto;
    `,
    NavbarLinkContainer: styled.div`
        display: flex;
    `,
    NavbarLink: styled(Link)`
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
        margin: 10px;
        text-decoration: none;

        @media (max-width: 760px) {
            display: none;
        }
    `,
    RightContainer : styled.div`
        align-items: center;
        display: flex;
        flex: 30%;
        justify-content: flex-end;
        padding-right: 5%;
    `,
    CartButton : styled.button`
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        margin: 0px;
        outline: none !important;
        padding: 0px;
    `,
    CartLogo : styled.img`
        height: 30px;
        margin: 10px;
        width: auto;
    `,
    CartItems : styled.div`
        align-items: center;
        background-color: orange;
        display: flex;
        height: 50vh;
        justify-content: center;
        margin-top: 100px;
        width: 90vw;
    `,
    Avatar : styled.img`
        height: 40px;
        margin: 0px;
        width: auto;
    `,
    OpenLinkButton : styled.button`
        align-items: center;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        display: inline-flex;
        font-size: 30px;
        justify-content: center;
        margin: 0px;
        outline: none !important;
        padding: 15px;

        @media (min-width: 761px) {
            display: none;
        }
    `,
    NavbarExtendedContainer : styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        height: ${(props) => (props.extendNavbar ? "325px" : "80px")};
        width: 100vw;

        @media (min-width: 761px) {
            display: none;
        }
    `,
    NavbarExtendedLinkContainer: styled.div`
        align-items: center;
        background: orange;
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        width: 100%;
    `,
    NavbarLinkExtended: styled(Link)`
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
        margin: 10px;
        text-decoration: none;
    `
}


function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [cartButton, setCartButton] = useState(false);
    console.log(extendNavbar);
    console.log(cartButton);  

    const handleToggleNavbar = () => {
        if (!extendNavbar) {
            setCartButton(false);
        }
        setExtendNavbar(!extendNavbar);
    };

    const handleToggleCart = () => {
        if (!cartButton) {
            setExtendNavbar(false);
        }
        setCartButton(!cartButton);
    };

    return <S.NavbarContainer extendNavbar={extendNavbar}>
        <S.NavbarInnerContainer>
            <S.LeftContainer>
                <S.OpenLinkButton onClick={handleToggleNavbar}>{extendNavbar ? <> &#10005;</> : <>&#8801;</>}</S.OpenLinkButton>
                <S.NavbarLogo src={Logo}></S.NavbarLogo>
                <S.NavbarLinkContainer>
                    <S.NavbarLink to="/">Home</S.NavbarLink>
                    <S.NavbarLink to="/products">Products</S.NavbarLink>
                    <S.NavbarLink to="/about">About</S.NavbarLink>
                    <S.NavbarLink to="/contact">Contact</S.NavbarLink>
                </S.NavbarLinkContainer>                 
            </S.LeftContainer>
            <S.RightContainer>
                <S.CartButton onClick={handleToggleCart}><S.CartLogo src={CartLogo}></S.CartLogo></S.CartButton>
                <S.Avatar src={AvatarImage}></S.Avatar>
            </S.RightContainer>
        </S.NavbarInnerContainer>

        {extendNavbar && (<S.NavbarExtendedContainer>            
            <S.NavbarExtendedLinkContainer>
                <S.NavbarLinkExtended to="/">Home</S.NavbarLinkExtended>
                <S.NavbarLinkExtended to="/products">Products</S.NavbarLinkExtended>
                <S.NavbarLinkExtended to="/about">About</S.NavbarLinkExtended>
                <S.NavbarLinkExtended to="/contact">Contact</S.NavbarLinkExtended>
            </S.NavbarExtendedLinkContainer>   
        </S.NavbarExtendedContainer>)}     

        {/* { cartButton && (
            <S.CartItems>Cart Items</S.CartItems>
        )}  */}
        

    </S.NavbarContainer>
}

export default Navbar;