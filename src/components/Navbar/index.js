import React from 'react'
import {FaBars} from 'react-icons/fa';
import logoRGB from "../../assets/images/Logo_Color_RGB.png";
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks
} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
               
                    <NavLogo to='/home'>  
                        <img src={logoRGB} className="logo-tucan" alt="logo" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="Biodanza">Biodanza</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Facilitadoras">Facilitadoras</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Clases">Clases</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Eventos">Eventos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Contacto">Contacto</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
};

export default Navbar
