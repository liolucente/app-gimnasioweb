import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AltaProfesores = () => {
    
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        dni: 0,
        email: ""
    });

    
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    const config = {
        headers:{
            'Content-Type': 'application/json;charset=utf-8',
        }
    }

    const handleSubmit = async (e) => {

        if (inputs.nombre.length===0 || inputs.apellido.length===0 || inputs.dni.length ===0 || inputs.email.length ===0) {
            alert('¡Debe completar los datos antes de grabar!');   
        } else {
            alert('¡Sus datos han sido enviados!');
            await axios.post("https://gimnasioweb.herokuapp.com/profesores",inputs,config)
            setInputs({
                nombre: "",
                apellido: "",
                dni: 0,
                email: ""
            })            
        }
    };  

    return (
        <div className=" altaprofesores container mt-0 pt-0">
            <Form onSubmit={handleSubmit}>
                <Row className="mt-0 pt-0">
                    <Form.Group controlId="formCabecera">
                        <hr></hr>
                            <h3 className="text-center mt-0 pt-0">ALTA DE PROFESORES</h3>
                        <hr></hr>
                    </Form.Group>
                </Row>

                <Row className="mt-5 mb-0 pt-0">
                    <Form.Control name="id" id="id" type="hidden" placeholder="id" />
                    <Col className="">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="nombre" type="text" placeholder="Nombre" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control name="apellido" type="text" placeholder="Apellido" onChange={handleChange} />
                    </Col>
                </Row>

                <Row className="mt-3 pt-0">
                    <Col>
                        <Form.Label>Dni</Form.Label>
                        <Form.Control name="dni" type="number" placeholder="Dni" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label className="">Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="email@ejemplo.com" onChange={handleChange}/>
                    </Col>
                </Row>                  

                <Button className="mt-5" variant="primary" type="submit">
                    Guardar Datos
                </Button>
            </Form>                    
        </div>
    )

};
export default AltaProfesores;