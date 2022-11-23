import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { Button, Container, Form } from "react-bootstrap";
import { products } from "./data";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
  } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Shop = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gradient-to-l to-amber-300 from-stone-400 h-96 w-full z-20">
        <div className="w-full flex items-center justify-center">
          <div className="relative md:top-20 bg-white shadow rounded py-6 lg:px-28 px-8 md:mx-24">
            <Container className="row justify-content-evenly mx-auto py-2">
              <h2 className="text-center mb-4 text-3xl"> Popular Products </h2>
              {products?.map((item, index) => (
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
                      <Button
                        style={{
                          textDecoration: "wavy !important",
                          backgroundColor: "#f1cc57",
                          border: "#f1cc57",
                        }}
                        onClick={() => {
                            if(localStorage.getItem('loggedin')) {
                                if(localStorage.getItem('cart')) {
                                    let data = JSON.parse(localStorage.getItem('cart'));
                                    data = [...data , item.id];
                                    localStorage.setItem('cart' , JSON.stringify(data));
                                } else {
                                    localStorage.setItem('cart' , JSON.stringify([item.id]));
                                }
                                const MySwal = withReactContent(Swal)
                                MySwal.fire({
                                    title: <strong>Success</strong>,
                                    html: <i>You added this item to your cart</i>,
                                    icon: 'success',
                                    timer: 3000
                                })

                            } else {
                                const MySwal = withReactContent(Swal)
                                MySwal.fire({
                                    title: <strong>You Have To Login To Add to Cart</strong>,
                                    html: <i>You will go to Login Page</i>,
                                    icon: 'success',
                                    timer: 3000
                                })
                                setTimeout(() => {
                                    navigate('/login');
                                }, 3000);
                            }
                        }}
                      >
                        Add To Cart
                      </Button>
                  </div>
                </MDBCardBody>
              </MDBCard>
              ))}
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};
