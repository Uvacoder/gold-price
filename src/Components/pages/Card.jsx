import { Badge, Button } from "react-bootstrap";

import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

import { Link, useNavigate } from "react-router-dom";

export default function Card({ item, fav, handleRemove, addToFav }) {
  const [addFav, setAddFav] = useState(fav);
  const navigate = useNavigate();

  return (
    <MDBCard
      style={{ maxWidth: "300px", marginBottom: 50 }}
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <MDBCardImage src={item.image} position="top" alt="..." />
      <MDBCardBody className="d-flex flex-column justify-content-between align-items-center">
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardTitle>{item.price} $</MDBCardTitle>
        <div className="d-flex ">
          {addFav == false ? (
            <Button
              style={{
                textDecoration: "wavy !important",
                backgroundColor: "#f1cc57",
                border: "#f1cc57",
              }}
              onClick={() => {
              }}
            >
              Add To Cart
            </Button>
          ) : (
            <Button
              style={{
                textDecoration: "wavy !important",
                backgroundColor: "#f1cc57",
                border: "#f1cc57",
              }}
              onClick={() => {
                setAddFav(!addFav);
                handleRemove(item);
              }}
            >
              Remove From Cart
            </Button>
          )}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}