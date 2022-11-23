
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

function ModiAfiliados() {

    const [afiliados, setAfiliados] = useState([])

    const getAfiliados = async () => {
        const { data } = await axios.get('https://gimnasioweb.herokuapp.com/modiAfiliados')
        console.log(data)
        setAfiliados(data.afiliados)
    }

    useEffect(() => {
        getAfiliados()
    }, [])

    const handleDelete = (id,nombre,apellido)=> {
        console.log(id);

        Swal.fire({
            title: '¿Desea eliminar al afiliado: ' + apellido + ' ' + nombre + '.?',
            showDenyButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('https://gimnasioweb.herokuapp.com/modiAfiliados/' + id);
                Swal.fire('Eliminado', '', 'success');
                getAfiliados();
            } })
    }        

    return (
        <div className="container mt-0 pt-0">
            <Row className="mt-0 pt-0">
                <Form.Group as={Col} controlId="formCabecera">
                    <hr></hr>
                        <h3 className="text-center mt-0 pt-0">LISTADO DE AFILIADOS</h3>
                    <hr></hr>
                </Form.Group>
            </Row>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Dni</th>
                        <th>Email</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                {afiliados.map((afiliado, i) => (
                        <tr key={i}>
                            <td>{afiliado.nombre}</td>
                            <td>{afiliado.apellido}</td>
                            <td>{afiliado.dni}</td>
                            <td>{afiliado.email}</td>
                            <td>
{/*                                 <Button  className="btn-success" variant="primary" type="submit">Editar</Button>     */}
                                <Button  onClick={() => handleDelete(afiliado._id,afiliado.nombre,afiliado.apellido)} className="btn-danger" variant="primary" type="submit">Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>                        
        </div>    
    );
}


export default ModiAfiliados;