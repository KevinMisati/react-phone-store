import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Logo from "../logo.png"
import styled from "styled-components"
import {ButtonContainer} from "./Button"




const Navbar = () => {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={Logo} alt="store logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center justify-content-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
}


export default Navbar;
    const NavWrapper = styled.nav`
    background:var(--mainDark);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize !important;
        &:hover{
            color:var(--lightBlue) !important;
        }
    }


    
    `;


