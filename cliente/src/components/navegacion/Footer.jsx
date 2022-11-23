import React from "react";
import {Link} from 'react-router-dom' 
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const footer = () => {
    return (  
        <div className="container">
            <footer className="py-3 my-4">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li  className="nav-item">
                                <Link target="_blank" to="ubicacion" className="nav-link px-2 text-muted">¿Dónde estamos?</Link>
                            </li>
                        </ul>
                        <p className="text-center text-muted">&copy; Club Pedro Echagüe, 2022</p>                    
                    </Form.Group>
                </Row>                    
            </footer>
        </div>            
    );
}
export default footer;