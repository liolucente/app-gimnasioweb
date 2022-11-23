import React from "react";
/* import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; */
import Carousel from 'react-bootstrap/Carousel';

const home = () =>{
    return (
        <div className="container">

            <h2 className="text-center m-5">INSTITUCIÓN CULTURAL Y DEPORTIVA PEDRO ECHAGÜE</h2>

            <Carousel fade>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://icdpedroechague.com.ar/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-10-at-23.36.38-1024x768.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
{/*                         <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://www.argentina.basketball/themes/ee/site/default/asset/img/blog/3e99fbef-bbb9-4f19-ab8a-1d4fa1cb6bc0.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
{/*                         <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://www.argentina.basketball/themes/ee/site/default/asset/img/blog/20842ba7-525d-4eee-bca8-5d0562e15e01.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
{/*                         <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>                

        </div>        
    );
}


export default home;