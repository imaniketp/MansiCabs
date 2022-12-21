import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blogs.css";
import Select from "react-select";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const placeoptions = [
  { value: "mumbai", label: "Mumbai" },
  { value: "nashik", label: "Nashik" },
  { value: "pune", label: "Pune" },
];

const blogcards = [
  {
    blogtitle: "Best Place To Visit Near Aurangabad",
    location: "Nashik, Maharashtra, India",
    blogcardimg: "blogimg3.png",
    blogcardContent:
      "An ancient location known as Elephanta Caves has been listed as a UNESCO World Historical Landmark. It is a superb illustration of mediaeval Indian rock-cut art and construction On an island...",
  },
  {
    blogtitle: "Best Place To Visit Near Aurangabad",
    location: "Nashik, Maharashtra, India",
    blogcardimg: "blogimg4.png",
    blogcardContent:
      "An ancient location known as Elephanta Caves has been listed as a UNESCO World Historical Landmark. It is a superb illustration of mediaeval Indian rock-cut art and construction On an island...",
  },
  {
    blogtitle: "Best Place To Visit Near Aurangabad",
    location: "Nashik, Maharashtra, India",
    blogcardimg: "blogimg3.png",
    blogcardContent:
      "An ancient location known as Elephanta Caves has been listed as a UNESCO World Historical Landmark. It is a superb illustration of mediaeval Indian rock-cut art and construction On an island...",
  },

  
];

function Blogs() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="mainblogcontainer">
      <Row className="blogsrow1">
        <Col md={3}>
          <img src="blogimg1.png" alt="" />
        </Col>

        <Col md={6}>
          <Container fluid className="blogSearch">

            <div>
                <h5>Popular Search</h5>
              <Select
                className="placeserchbar"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={placeoptions}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
                
                placeholder={<BiSearch/>}
              />
            </div>


            <div>
              <Row className="blogserchimgmain">
                <Col md={4} className="blogserchimg">
                  <img src="Nashik 1.png" alt="" />
                  <p>Best Places to visit in Nashik</p>
                </Col>

                <Col md={4} className="blogserchimg">
                  <img src="Nashik 3.png" alt="" />
                  <p>Best Places to visit in Pune</p>
                </Col>

                <Col md={4} className="blogserchimg">
                  <img src="Nashik 2.png" alt="" />
                  <p>Best Places to visit in Aurangabad</p>
                </Col>
              </Row>
            </div>
          </Container>
        </Col>

        <Col md={3}>
          <img src="blogimg2.png" alt="" />
        </Col>
      </Row>

      <Row className="blogsrow2">
        {blogcards.map((item, index) => {
          return (
            <div key={index} className="searchplacesCard">
              <div>
                <img src={item.blogcardimg} alt="" />
              </div>
              <div className="searchplacesCarddata">
                <p> {item.location}</p>
                <h6 className="searchplacesCardtitle">
                  {item.blogtitle}
                </h6>
                <p>
                  {item.blogcardContent}
                </p>
                <Link to='/blogs/nashik'>
                <h6>Read More</h6>
                </Link>
              </div>
            </div>
          )
        })}
      </Row>
    </div>
  );
}

export default Blogs;
