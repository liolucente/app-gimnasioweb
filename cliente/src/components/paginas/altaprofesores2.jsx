import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
/* import Swal from 'sweetalert2' */


const FormuAltaprofesores2 = () => {
    

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState(0);
    const [email, setEmail] = useState('email@ejemplo.com.ar');
/*     const [error, setError] = useState(false); */

    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        dni: 0,
        email: ""
    });

/*     const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }; */

    const config = {
        headers:{
            'Content-Type': 'application/json;charset=utf-8',
        }
    }

/*     const handleClick = async () => {
        await axios.post("http://localhost:9000/profesores",inputs,config)
        setInputs({
            nombre: "",
            apellido: "",
            dni: 0,
            email: ""
        })        
    };  */
    
    const handleSubmit = async (e) => {

        if (nombre.length===0 || apellido.length===0 || dni.length ===0 || email.length ===0) {
            alert('¡Debe completar todos los datos antes de continuar!');
        } else {

            setInputs({
                ...inputs,
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                email:email
            })

            console.log(inputs)

            await axios.post("http://localhost:9000/profesores",inputs,config)
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
                        <Form.Control name="nombre" type="text" placeholder="Nombre" onChange={e=>setNombre(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control name="apellido" type="text" placeholder="Apellido" onChange={e=>setApellido(e.target.value)} />
                    </Col>
                </Row>

                <Row className="mt-3 pt-0">
                    <Col>
                        <Form.Label>Dni</Form.Label>
                        <Form.Control name="dni" type="number" placeholder="Dni" onChange={e=>setDni(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Label className="">Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="email@ejemplo.com" onChange={e=>setEmail(e.target.value)}/>
                    </Col>
                </Row>                  

                <Button className="mt-5" variant="primary" type="submit">
                    Guardar Datos
                </Button>
            </Form>                    
        </div>
    )

};
export default FormuAltaprofesores2;