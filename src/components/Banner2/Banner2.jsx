import React, { useState } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import './Banner2.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Banner2() {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
   <div className='banner2'>
    <Container fluid className='banner2-second'>
    <Row>
        <Col>
        <h2 className='banner2-text'>We're curating experience that <br/> <span style={{color:"yellow"}} >enable everyone to travel world</span></h2>
        </Col>
        <Col>
        <Row>
        <Col className='banner2-card'>
            <h6>Happy Client</h6>
            {counterOn && <h4><CountUp start={1} end={5} duration={2} delay={0} />,<CountUp start={1} end={56} duration={2} delay={0} />,<CountUp start={1} end={658} duration={2} delay={0} />+</h4>}
            
        </Col>
        <Col className='banner2-card'>
            <h6>Our Tours</h6>
            {counterOn && <h4><CountUp start={1} end={42} duration={2} delay={0} />,<CountUp start={1} end={907} duration={2} delay={0} />+</h4>}
            
        </Col>
        <Col className='banner2-card'>
            <h6>Our Destinations</h6>
            {counterOn && <h4><CountUp start={1} end={2} duration={2} delay={0} />,<CountUp start={1} end={500} duration={2} delay={0} />+</h4>}
            
        </Col>
        </Row>
        </Col>
    </Row>
    </Container>
   </div>
   </ScrollTrigger>
  )
}

export default Banner2