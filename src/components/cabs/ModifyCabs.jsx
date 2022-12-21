import React,{useState} from 'react'
import './ModifyCabs.css' 
import { Link } from "react-router-dom";
import Select from "react-select";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { GiCircle } from "react-icons/gi";
import { Col, Container, Row } from 'react-bootstrap';




const options = [
    { value: "selectCity", label: "Select City" },
    { value: "mumbai", label: "Mumbai" },
    { value: "nashik", label: "Nashik" },
    { value: "pune", label: "Pune" },
  ];
  const time = [
    { value: "selectTime", label: "Select Time" },
    { value: "12:00pm", label: "12:00PM" },
    { value: "01:00pm", label: "01:00PM" },
    { value: "02:00pm", label: "02:00PM" },
  ];
  const airportOptions = [
    { value: "fromAirport", label: "From Airport" },
    { value: "toAirport", label: "To Airport" },
  ];

function ModifyCabs() {
    const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  const [value, setValue] = useState(1);

  const [onewayActive, setonewayActive] = useState(true);
  const [roundActive, setroundActive] = useState(false);
  const [rentalActive, setrentalActive] = useState(false);
  const [airportActive, setairportActive] = useState(false);

const oneWayTrip = () => {
  setonewayActive(true)
  setroundActive(false)
  setrentalActive(false)
  setairportActive(false)
  setValue(1)
}

const roundTrip = () => {
  setValue(2)
  setroundActive(true)
  setonewayActive(false)
  setrentalActive(false)
  setairportActive(false)
}

const rental = () => {
  setValue(3)
  setrentalActive(true)
  setonewayActive(false)
  setroundActive(false)
  setairportActive(false)
}

const airport = () => {
  setValue(4)
  setairportActive(true)
  setonewayActive(false)
  setroundActive(false)
  setrentalActive(false)
}
  return (
    <div className="cabserchtop">
    <Container className="cabsbannermain">
          <Row className="radiobtn" >
            <Col className="mainradiobtn">
              <div onClick={oneWayTrip}>
                <GiCircle 
                style={{
                  color: onewayActive ? "#7142f8" : "black",
                  border: onewayActive ? "3px solid" : "1px",
                  borderRadius: onewayActive ? "50%" : "0"
                }}
                />
                <p
                style={{
                  fontWeight: onewayActive ? "bolder" : "normal"
                }}
                >One Way Trip</p>
              </div>
            </Col>

            <Col className="mainradiobtn">
              <div onClick={roundTrip}>
                <GiCircle 
                style={{
                  color: roundActive ? "#7142f8" : "black",
                  border: roundActive ? "3px solid" : "1px",
                  borderRadius: roundActive ? "50%" : "0"
                }} />
                <p
                style={{
                  fontWeight: roundActive ? "bolder" : "normal"
                }}>Round Trip</p>
              </div>
            </Col>

            <Col className="mainradiobtn">
              <div onClick={rental}>
                <GiCircle 
                style={{
                  color: rentalActive ? "#7142f8" : "black",
                  border: rentalActive ? "3px solid" : "1px",
                  borderRadius: rentalActive ? "50%" : "0"
                }} />
                <p
                style={{
                  fontWeight: rentalActive ? "bolder" : "normal"
                }}>Rental</p>
              </div>
            </Col>

            <Col className="mainradiobtn">
              <div onClick={airport}>
                <GiCircle  
                style={{
                  color: airportActive ? "#7142f8" : "black",
                  border: airportActive ? "3px solid" : "1px",
                  borderRadius: airportActive ? "50%" : "0"
                }}/>
                <p
                style={{
                  fontWeight: airportActive ? "bolder" : "normal"
                }}>Airport</p>
              </div>
            </Col>
          </Row>
          
          <Row className="radiobtn2" >
            <Col md={6} className="mainradiobtn">
              <Col className="mainradiobtn2" md={3}>
                <button className={`bannerControlBtn${onewayActive? "Active" : "Inactive"}`} onClick={oneWayTrip}>One Way</button>
              </Col>
              <Col className="mainradiobtn2" md={3}>
                <button className={`bannerControlBtn${roundActive? "Active" : "Inactive"}`} onClick={roundTrip}>Round Way</button>
              </Col>
            </Col>

            <Col md={6} className="mainradiobtn">
              <Col className="mainradiobtn2" md={3}>
                <button className={`bannerControlBtn${rentalActive? "Active" : "Inactive"}`} onClick={rental}>Rental</button>
              </Col>
              <Col className="mainradiobtn2" md={3}>
                <button className={`bannerControlBtn${airportActive? "Active" : "Inactive"}`} onClick={airport}>Airport</button>
              </Col>
            </Col>    
          </Row>

          {value == 1 && 
            <Row className="radioInput">
              <Col md={3} className="radioInputCol">
                  <label htmlFor="">From</label>
                  <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder='Select City'
                  />
              </Col>
              <Col md={1} className="radioInputCol">
                <div className="radioInputArrow">
                  <CgArrowsExchangeAlt />
                </div>
              </Col>
              <Col md={3} className="radioInputCol">
                  <label htmlFor="">To</label>
                  <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder='Select City' 
                  />
              </Col>
              <Col md={2} className="radioInputCol">
                  <label htmlFor="">Pick Up</label>
                  <input type='date' />
              </Col>
              <Col md={3} className="radioInputCol">
                  <label htmlFor="">Pick At</label>
                  <Select
                  menuPlacement="top"
                  defaultValue={selectedTime}
                  onChange={setSelectedTime}
                  options={time}
                  placeholder='Select Time' 
                  />
              </Col>
            </Row>
          }
          {value == 2 && 
            <Row className="radioInput">
            <Col md={2} className="radioInputCol">
                <label htmlFor="">From</label>
                <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder='Select City'
                />
            </Col>
            <Col md={1} className="radioInputCol">
              <div className="radioInputArrow">
                <CgArrowsExchangeAlt />
              </div>
            </Col>
            <Col md={2} className="radioInputCol">
                <label htmlFor="">To</label>
                <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder='Select City' 
                />
            </Col>
            <Col md={2} className="radioInputCol">
                <label htmlFor="">Pick Up</label>
                <input type='date' />
            </Col>
            <Col md={2} className="radioInputCol">
                <label htmlFor="">Return</label>
                <input type='date' />
            </Col>
            <Col md={3} className="radioInputCol">
                <label htmlFor="">Pick At</label>
                <Select
                menuPlacement="top"
                defaultValue={selectedTime}
                onChange={setSelectedTime}
                options={time}
                placeholder='Select Time' 
                />
            </Col>
          </Row>
           
          }

          {value == 3 && 
            <Row className="radioInput">
            <Col md={4} className="radioInputCol">
                <label htmlFor="">From</label>
                <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder='Select City'
                />
            </Col>
            
            <Col md={4} className="radioInputCol">
                <label htmlFor="">Pick Up</label>
                <input type='date' />
            </Col>
            
            <Col md={4} className="radioInputCol">
                <label htmlFor="">Pick At</label>
                <Select
                menuPlacement="top"
                defaultValue={selectedTime}
                onChange={setSelectedTime}
                options={time}
                placeholder='Select Time' 
                />
            </Col>
          </Row>
            
          }

          {value == 4 && 
            <Row className="radioInput">
            <Col md={3} className="radioInputCol">
                <label htmlFor="">City</label>
                <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder='Select City'
                />
            </Col>
            <Col md={2} className="radioInputCol">
                <label htmlFor="">Trip</label>
                <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={airportOptions}
                placeholder='Select Trip' 
                />
            </Col>
            <Col md={3} className="radioInputCol">
                <label htmlFor="">Pick Up Address</label>
                <input type='text' placeholder="Enter Your Address"/>
            </Col>
            <Col md={2} className="radioInputCol">
                <label htmlFor="">Pick Up</label>
                <input type='date' />
            </Col>
            <Col md={2} className="radioInputCol">
                <label htmlFor="">Pick At</label>
                <Select
                menuPlacement="top"
                defaultValue={selectedTime}
                onChange={setSelectedTime}
                options={time}
                placeholder='Select Time' 
                />
            </Col>
          </Row>
            
          }
        </Container>
            <button className="modifybtn">Modify Details</button>
        
    </div>
  )
}

export default ModifyCabs