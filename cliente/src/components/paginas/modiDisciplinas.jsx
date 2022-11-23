
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

function ModiDisciplinas() {


    const [disciplinas, setDisciplinas] = useState([])

    const getDisciplinas = async () => {
        const { data } = await axios.get('https://gimnasioweb.herokuapp.com/modiDisciplinas')
        console.log(data)
        setDisciplinas(data.disciplinas)
    }

    useEffect(() => {
        getDisciplinas()
    }, [])
    
    const handleDelete = (id,item,texto)=> {

        Swal.fire({
            title: '¿Desea eliminar la disciplina: ' + item + ' - ' + texto + '.?',
            showDenyButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('https://gimnasioweb.herokuapp.com/modiDisciplinas/' + id);
                Swal.fire('Eliminado', '', 'success');
                getDisciplinas();
            } })
    }    

    return (
        <div className="container mt-0 pt-0">
            <Row className="mt-0 pt-0">
                <Form.Group as={Col} controlId="formCabecera">
                    <hr></hr>
                        <h3 className="text-center mt-0 pt-0">LISTADO DE DISCIPLINAS</h3>
                    <hr></hr>
                </Form.Group>
            </Row>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nro. Item</th>
                        <th>Texto</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((disciplina, i) => (
                        <tr key={i}>
                            <td>{disciplina.item}</td>
                            <td>{disciplina.texto}</td>
                            <td>
{/*                                 <Button  className="btn-success" variant="primary" type="submit">Editar</Button>     */}
                                <Button  onClick={() => handleDelete(disciplina._id,disciplina.item,disciplina.texto)} className="btn-danger" variant="primary" type="submit">Eliminar</Button>
                            </td>
                        </tr>
                    ))} 
                </tbody>
            </Table>                        
        </div>    
    );
}


export default ModiDisciplinas;