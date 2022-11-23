import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import myLogo from '../../imagenes/mancuernas.png';

function navbar() {
    return (
        <Navbar bg="light" expand="lg" className="m-0">
            <Container fluid>
            <img src={myLogo} width={20} height={20} alt="..."/>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="home">Home</Nav.Link>
                        <NavDropdown title="Abonos" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="registroAbonos">Registrar Abonos</NavDropdown.Item>
                            <NavDropdown.Item href="vencimientoAbonos">Vencimiento de abonos</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Altas" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="altaprofesores">Profesores</NavDropdown.Item>
                            <NavDropdown.Item href="altaAfiliados">Afiliados</NavDropdown.Item>
                            <NavDropdown.Item href="altaDisciplinas">Disciplinas</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Consultas" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="profesores">Profesores</NavDropdown.Item>
                            <NavDropdown.Item href="modiAfiliados">Afiliados</NavDropdown.Item>
                            <NavDropdown.Item href="modiDisciplinas">Disciplinas</NavDropdown.Item>
                        </NavDropdown>                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navbar;

