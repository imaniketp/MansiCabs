import React from "react";
import { useState } from "react";
import { Row, Col, Container,Dropdown, Button, DropdownButton } from "react-bootstrap";
import { AiOutlineCheckCircle, AiFillCheckCircle,AiFillStar } from "react-icons/ai";
import { FaGasPump } from "react-icons/fa";
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {MdAirlineSeatReclineExtra} from 'react-icons/md'
import { Link } from "react-router-dom";
import './CabsSearch.css'
import ModifyCabs from "./ModifyCabs";






function CabsSearch() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
    setActive(!active);
  }
  
  return (
    <>
    <ModifyCabs />
    <Container fluid className="cabs0">
      <Row>
        <Col md={3}>
          <Row className="cabs1">
            <h5>Why Booking Cabs With Us?</h5>
            <p>
              <span>
                <AiOutlineCheckCircle />
              </span>
              Your doorstep pickup & drop to destination
            </p>
            <p>
              <span>
                <AiOutlineCheckCircle />
              </span>
              No extra charges than what's mentioned
            </p>
            <p>
              <span>
                <AiOutlineCheckCircle />
              </span>
              Experienced drivers with safe & comfortable cabs
            </p>
          </Row>
          <div className="filterdropdown-1">

          <div className="filterdropdown-10">
            <DropdownButton
              align="end"
              title="Car Model"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item href="#/action-1"><input type="checkbox" />Etios or similar</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><input type="checkbox"/>Innova or similar</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><input type="checkbox"/>E-Auto</Dropdown.Item>
            </DropdownButton>
          
             <DropdownButton
              align="end"
              title="Passenger capacity"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item href="#/action-1"><input type="checkbox" />4 Passanger seat</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><input type="checkbox"/>7 Passanger seat</Dropdown.Item>
            </DropdownButton>
          </div>

         

           

          </div>
          <Row className="cabs2">
            <div className="cabs2-filter">
              <h5>Filter</h5>
              <p>Clear all</p>
            </div>
            <hr />
            <div className="cabs2-filter2">
              <div>
                <h6>Car Model</h6>
                <p>RESET</p>
              </div>
              <input type="checkbox" />
              <label>Etios or similar</label>
              <br />
              <input type="checkbox" />
              <label>Innova or similar</label>
              <br />
              <input type="checkbox" />
              <label>E-Auto</label>
            </div>
            <hr />
            <div div className="cabs2-filter3">
              <div>
                <h6>Passenger capacity</h6>
                <p>RESET</p>
              </div>
              <input type="checkbox" />
              <label>4 Passanger seat</label>
              <br />
              <input type="checkbox" />
              <label>7 Passanger seat</label>
            </div>
          </Row>
        </Col>
        <Col md={8}>
          <Row className="cabs-main1">
            
              <Row className="cabs-etios0">
                <Col md={4} className="cabs-etios1-img">
                  <img src="Etios-removebg-preview.png" alt="etios" />
                </Col>

                <Col md={4} className="cabs-etios-dzire">
                  <h2>SEDAN</h2>
                  <h4>Dzire,Etios</h4>
                  <h6>Or More</h6>
                </Col>

                <Col md={4} className="cabs-etios-service">
                  <h6>Services</h6>
                  <p><span><IoMdCheckmarkCircleOutline/></span>AC <span><MdAirlineSeatReclineExtra/> </span>Passangers 4</p>
                </Col>
              </Row>
          
              <div className="cabs-etios">
              <Row className="cabs-etios2">
                <Col>
                  <Row className="cabs-etios2-spec">
                    <h5>Spacious Car</h5>
                    <Row>
                      <Col md={4} className="cabs-etios2-spec2">
                        <p>
                          <span>
                            <AiFillCheckCircle />
                          </span>
                          Extra Km fare
                        </p>
                      </Col>
                      <Col md={8} className="cabs-etios2-spec3">
                        <p>₹15.0/km after 167 kms</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4} className="cabs-etios2-spec2">
                        <p>
                          <span>
                            <AiFillCheckCircle />
                          </span>
                          Fuel Type
                        </p>
                      </Col>
                      <Col md={8} className="cabs-etios2-spec3">
                        <p>
                          <FaGasPump /> CNG/Diesel
                        </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4} className="cabs-etios2-spec2">
                        <p>
                          <span>
                            <AiFillCheckCircle />
                          </span>
                          Cancellation
                        </p>
                      </Col>
                      <Col md={8} className="cabs-etios2-spec3">
                        <p>Free within 30 mins of booking</p>
                      </Col>
                    </Row>
                  </Row>
                </Col>
                <Col md={4} className="cabs-etios3">
                  <p>Free cancellation until 1 hour <br/>before pickup</p>
                  <div>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                  </div>
                  <h6>529 rating</h6>
                  <h5><del>₹2631</del><span>15% off</span></h5>
                  <h4>₹2269</h4>
                  <div>
                    <Link to='/transfer-details'>
                  <Button id="dropdown-basic-button" title="Select" className="cabs-etios3-drop">
                  Search
                  </Button>
                  </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>


          <Row className="cabs-main2">
          <Row className="cabs-etios0">
                <Col md={4} className="cabs-etios1-img">
                  <img src="innova2-removebg-preview.png" alt="etios" />
                </Col>

                <Col md={4} className="cabs-etios-dzire">
                  <h2>SUV</h2>
                  <h4>Innova, Ertiga</h4>
                  <h6>Or More</h6>
                </Col>

                <Col md={4} className="cabs-etios-service">
                  <h6>Services</h6>
                  <p><span><IoMdCheckmarkCircleOutline/></span>AC <span><MdAirlineSeatReclineExtra/> </span>Passangers 4</p>
                </Col>
              </Row>
          
              <div className="cabs-etios">
              <Row className="cabs-etios2">
                <Col>
                  <Row className="cabs-etios2-spec">
                    <h5>Spacious Car</h5>
                    <Row>
                      <Col md={4} className="cabs-etios2-spec2">
                        <p>
                          <span>
                            <AiFillCheckCircle />
                          </span>
                          Extra Km fare
                        </p>
                      </Col>
                      <Col md={8} className="cabs-etios2-spec3">
                        <p>₹15.0/km after 167 kms</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4} className="cabs-etios2-spec2">
                        <p>
                          <span>
                            <AiFillCheckCircle />
                          </span>
                          Fuel Type
                        </p>
                      </Col>
                      <Col md={8} className="cabs-etios2-spec3">
                        <p>
                          <FaGasPump /> CNG/Diesel
                        </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4} className="cabs-etios2-spec2">
                        <p>
                          <span>
                            <AiFillCheckCircle />
                          </span>
                          Cancellation
                        </p>
                      </Col>
                      <Col md={8} className="cabs-etios2-spec3">
                        <p>Free within 30 mins of booking</p>
                      </Col>
                    </Row>
                  </Row>
                </Col>
                <Col md={4} className="cabs-etios3">
                  <p>Free cancellation until 1 hour <br/>before pickup</p>
                  <div>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                  </div>
                  <h6>529 rating</h6>
                  <h5><del>₹2631</del><span>15% off</span></h5>
                  <h4>₹2269</h4>
                  <div>
                  <Link to='/transfer-details'>
                  <Button id="dropdown-basic-button" title="Select" className="cabs-etios3-drop">
                  Search
                  </Button>
                  </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
          
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default CabsSearch