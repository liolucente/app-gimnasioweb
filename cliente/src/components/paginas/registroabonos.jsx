import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/registroabonos.css'
import { useState,useEffect } from 'react';
import axios from 'axios'


const RegistroAbonos = () => {
    
    const [inputs, setInputs] = useState({
        dni: 0,
        nombre: "",
        apellido: "",
        email: "",
        disciplina: "",
        importe: 0,
        fechaDesde: ""
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

        if (inputs.dni.length===0 || inputs.nombre.length===0 || inputs.apellido.length===0 || inputs.email.length===0 || inputs.disciplina.length===0 || inputs.importe.length===0 || inputs.fechaDesde.length===0 ) {
            alert('¡Debe completar los datos antes de grabar!');   
        } else {
            alert('¡Sus datos han sido enviados!');
            await axios.post("https://gimnasioweb.herokuapp.com/registroAbonos",inputs,config)
            setInputs({
                dni: 0,
                nombre: "",
                apellido: "",
                email: "",
                disciplina: "",
                importe: 0,
                fechaDesde: "",
            })            
        }         

    };  

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        const getDisciplinas = async () => {
            const { data } = await axios.get('https://gimnasioweb.herokuapp.com/modiDisciplinas')
            console.log(data)
            setDisciplinas(data.disciplinas)
        }
        getDisciplinas()
    }, [])      

    return (
        <div className=" registroabonos container mt-0 pt-0">
            <Form onSubmit={handleClick}>
                <Row className="mt-0 pt-0">
                    <Form.Group controlId="formCabecera">
                        <hr></hr>
                            <h3 className="text-center mt-0 pt-0">REGISTRO DE ABONOS MENSUALES</h3>
                        <hr></hr>
                    </Form.Group>
                </Row>

                <Row className="mt-5 mb-0 pt-0">
                    <Form.Control name="id" id="id" type="hidden" placeholder="id" />
                    <Col>
                        <Form.Label>Dni</Form.Label>
                        <Form.Control name="dni" type="number" placeholder="Dni" onChange={handleChange}/>
                    </Col>
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
                        <Form.Label className="">Email</Form.Label>
                        <Form.Control name="email" id="email" type="email" placeholder="email@ejemplo.com" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label className="">Disciplinas</Form.Label>
                        <Form.Select name="disciplina" aria-label="Default select example" onChange={handleChange}>
                        <option>Seleccione una..</option>
                            {disciplinas.map((disciplina, i) => (
                            <option key={i} value={disciplina.texto}>{disciplina.texto}</option>
                            ))} 
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mt-3 pt-0">
                    <Col>
                        <Form.Label className="">Importe</Form.Label>
                        <Form.Control name="importe" type="number" placeholder="importe" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label className="">Fecha</Form.Label>
                        <Form.Control type="Date" name="fechaDesde" onChange={handleChange}/>
                    </Col>
                </Row>

                <Button className="mt-5" variant="primary" type="submit">
                    Guardar Datos
                </Button>
            </Form>                    
        </div>
    )

};
export default RegistroAbonos;