
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
/* import Modal from 'react-bootstrap/Modal'; */
import Swal from 'sweetalert2'
/* import VentanaModal from './ventanaModal' */

function ListaProfesores() {


    const [profesores, setProfesores] = useState([])

    const getProfesores = async () => {
        const { data } = await axios.get('https://gimnasioweb.herokuapp.com/profesores')
        console.log(data)
        setProfesores(data.profesores)
    }

    useEffect(() => {
        getProfesores()
    }, [])      

/*     const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [elimina, setElinina] = useState(false);
    const eliminaCierra = () => setElinina(false); */
/*     const eliminaAbre = () => setElinina(true);     */

    const handleDelete = (id,nombre,apellido,dni)=> {
        console.log(id);

        Swal.fire({
            title: 'Está por eliminar a ' + nombre + ' ' + apellido + ' ' + dni + '. ¿Desea continuar?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('https://gimnasioweb.herokuapp.com/profesores/' + id);
                Swal.fire('Eliminado', '', 'success');
                getProfesores();
            } })

    }


    return (
        <div className="container mt-0 pt-0">
            <Row className="mt-0 pt-0">
                <Form.Group as={Col} controlId="formCabecera">
                    <hr></hr>
                        <h3 className="text-center mt-0 pt-0">LISTADO DE PROFESORES</h3>
                    <hr></hr>
                </Form.Group>
            </Row>

            <Table striped bordered hover>
                <thead>
                    <tr>
{/*                         <th>ID</th> */}
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Dni</th>
                        <th>Email</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {profesores.map((profesor, i) => (
                        <tr key={i}>
{/*                             <td>{profesor._id}</td> */}
                            <td>{profesor.nombre}</td>
                            <td>{profesor.apellido}</td>
                            <td>{profesor.dni}</td>
                            <td>{profesor.email}</td>
                            <td>
{/*                                 <Button name="modificar" className=" btn-success" onClick={handleShow} variant="primary" type="submit">Editar</Button>     */}
                                <Button onClick={() => handleDelete(profesor._id,profesor.nombre,profesor.apellido,profesor.dni)} variant="danger">Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
{/*             <Form>
            <Modal isOpen={true} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="m-0" controlId="exampleForm.ControlInput1"> 
                            <Form.Label className="m-0">Nombre</Form.Label>
                            <Form.Control className="mb-2" name="nombre" type="text" placeholder="Nombre"/>

                            <Form.Label className="m-0">Apellido</Form.Label>
                            <Form.Control className="mb-2" name="apellido" type="text" placeholder="Apellido" />

                            <Form.Label className="m-0">Dni</Form.Label>
                            <Form.Control className="mb-2" name="dni" type="number" placeholder="Dni" />

                            <Form.Label className="m-0">Email</Form.Label>
                            <Form.Control className="mb-2" name="email" type="email" placeholder="Email" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            </Form>

            <Form>
                <Modal show={elimina} onHide={eliminaCierra}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar Datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" autoFocus />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={eliminaCierra}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={eliminaCierra}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>                                       */}
        </div>    
    );
}




export default ListaProfesores;
