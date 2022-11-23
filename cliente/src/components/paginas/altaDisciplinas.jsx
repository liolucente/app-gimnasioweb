import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';


const AltaDisciplinas = () => {
    
    const [inputs, setInputs] = useState({
        item: 0,
        texto: "",
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

    const handleClick = async () => {
        
        if (inputs.item.length===0 || inputs.texto.length===0 ) {
            alert('¡Debe completar los datos antes de grabar!');   
        } else {
            alert('¡Sus datos han sido enviados!');
            await axios.post("https://gimnasioweb.herokuapp.com/altaDisciplinas",inputs,config)
            setInputs({
                item: 0,
                texto: ""
            })          
        }        

    };  

    return (
        <div className="Disciplinas container mt-0 pt-0 ">
            <Form onSubmit={handleClick}>
                <Row className="mt-0 pt-0">
                    <Form.Group controlId="formCabecera">
                        <hr></hr>
                            <h3 className="text-center mt-0 pt-0">ALTA DE DISCIPLINAS</h3>
                        <hr></hr>
                    </Form.Group>
                </Row>

                <Row className="mt-5 mb-0 pt-0">
                    <Form.Control name="id" id="id" type="hidden" placeholder="id" />
                    <Col className="">
                        <Form.Label>Item</Form.Label>
                        <Form.Control name="item" type="text" placeholder="Nro. Item" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Texto</Form.Label>
                        <Form.Control name="texto" type="text" placeholder="Descripción" onChange={handleChange} />
                    </Col>
                </Row>             

                <Button className="mt-5" variant="primary" type="submit">
                    Guardar Datos
                </Button>
            </Form>                    
        </div>
    )

};
export default AltaDisciplinas;