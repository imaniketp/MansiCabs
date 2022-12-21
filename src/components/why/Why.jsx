import React from 'react'
import './Why.css'
import {Col, Container, Row} from 'react-bootstrap'
import trustbg from '../../Assets/trust-removebg-preview.png'


function Why() {
  return (
    <Container fluid className='whyContainer'>
        <h1>WHY CHOOSE US</h1>
        <p>We Aim To Provide Best Car Rental & Cab Booking Services In India</p>
        
        <Row className='whyRow'>
            <Col className='whyCol' md={3}>
                <div>
                    <img src={trustbg} className='whyimg1'  alt=''/>
                </div>
                <div>
                    <h5>Trusted Advisor</h5>
                    <p>We Trust You For Your Safety</p>
                </div>
            </Col>

            <Col className='whyCol' md={3}>
                <div>
                    <img src='money-removebg-preview.png' className='whyimg2'  alt=''/>
                </div>
                <div>
                    <h5>Lowest Prices</h5>
                    <p>No Extra-Charges As Mentioned In The Pricing</p>
                </div>
            </Col>

            <Col className='whyCol' md={3}>
                <div>
                    <img src='24 x 7.png' className='whyimg3'  alt=''/>
                </div>
                <div>
                    <h5>24X7</h5>
                    <p>Always Available For Your Needs</p>
                </div>
            </Col>

            <Col className='whyCol' md={3}>
                <div>
                    <img src='exp_driver-removebg-preview.png' className='whyimg4'  alt=''/>
                </div>
                <div>
                    <h5>Experienced Drivers</h5>
                    <p>For Your Safety Drivers With 10 Years Experience</p>
                </div>
            </Col>


        </Row>


    </Container>
  )
}

export default Why

