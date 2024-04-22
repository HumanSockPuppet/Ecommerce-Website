import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import CartLogo from "../assets/icon-cart.svg"
import AvatarImage from "../assets/image-avatar.png"

const S = {
    NavbarContainer : styled.nav`
        background: none;
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: fixed;
        top: 0;
        width: 100vw;
        align-items: center;
    `,
    LeftContainer : styled.div`
        flex: 70%;
        display: flex;
        align-items: center;
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
        width: auto;
        margin: 10px;
        margin-left: 20px;
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

        @media (max-width: 760px){
            display: none;
        }
    `,    
    RightContainer : styled.div`
        flex: 30%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 5%;
    `,
    CartButton : styled.button`
        background: none;
        cursor: pointer;
        border: none;
        align-items: center;
        justify-content: center;
        outline: none !important; 
        margin: 0px;
        padding: 0px;
    `,
    CartLogo : styled.img`        
        height: 30px;
        width: auto;
        margin: 10px;
    `,
    CartItems : styled.div`
        display: flex;
        height: 50vh;
        width: 90vw;
        background-color: orange;
        margin-top: 100px;
        align-items: center;
        justify-content: center;
    `,
    Avatar : styled.img`
        height: 40px;
        width: auto;
        margin: 0px;
    `,
    OpenLinkButton : styled.button`
        font-size: 30px;
        background: none;
        cursor: pointer;
        color: white;
        border: none;
        align-items: center;
        justify-content: center;
        display: inline-flex;
        outline: none !important; 
        margin: 0px;
        padding: 15px;

        @media (min-width: 761px){
            display: none;
        }
    `,    
    NavbarExtendedContainer : styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: ${(props) => (props.extendNavbar ? "325px" : "80px")};
        width: 100vw;

        @media (min-width: 761px){
            display: none;
        }
    `,
    NavbarExtendedLinkContainer: styled.div`
        margin-top: 80px;
        display: flex;
        flex-direction: column;  
        align-items: center;
        background: orange;    
        width: 100%;             
    `,
    NavbarLinkExtended: styled(Link)`
        color: white;
        font-size: 25px;
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        margin: 10px;
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