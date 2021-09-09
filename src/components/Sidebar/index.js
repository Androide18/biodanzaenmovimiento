import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarWrapper
} from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="Biodanza" onClick={toggle} >
                            Biodanza
                        </SidebarLink>
                        <SidebarLink to="Facilitadoras" onClick={toggle}>
                            Facilitadoras
                        </SidebarLink>
                        <SidebarLink to="Clases" onClick={toggle}>
                            Clases
                        </SidebarLink>
                        <SidebarLink to="Eventos" onClick={toggle}>
                            Eventos
                        </SidebarLink>
                        <SidebarLink to="Contacto" onClick={toggle}>
                            Contacto
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
