import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';

function VencimientoAbonos() {

    const [abonos, setAbonos] = useState([])

    useEffect(() => {
        const getAbonos = async () => {
            const { data } = await axios.get('https://gimnasioweb.herokuapp.com/vencimientoAbonos')
            console.log(data)
            setAbonos(data.abonos)
        }
        getAbonos()
    }, [])

    return (
        <div className="container mt-0 pt-0">
            <Row className="mt-0 pt-0">
                <Form.Group as={Col} controlId="formCabecera">
                    <hr></hr>
                        <h3 className="text-center mt-0 pt-0">LISTADO DE ABONOS</h3>
                    <hr></hr>
                </Form.Group>
            </Row>

            <Table>
                <thead>
                    <tr>
                    <th>Disciplina</th>
                    <th>Dni Afiliado</th>
                    <th>Nombre Afiliado</th>
                    <th>Importe</th>
                    <th>Periodo Desde</th>
                    <th>Periodo Hasta</th>
                    </tr>
                </thead>
                <tbody>
                    {abonos.map((abono, i) => (
                        <tr key={i}>
                            <td>{abono.disciplina}</td>
                            <td>{abono.dni}</td>
                            <td>{abono.nombre}</td>
                            <td>{abono.importe}</td>
                            <td>{abono.fechaDesde}</td>
                            <td>{abono.fechaHasta}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>                        
        </div>    
    );
}


export default VencimientoAbonos;
