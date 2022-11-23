import React, { useEffect, useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { products } from "../data";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
  } from "mdb-react-ui-kit";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from "react-router-dom";

export const Cart = () => {

    const [newProducts , setNewProducts] = useState([]);
    const [total , setTotal] = useState(0);
    const [render , setRender] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('cart')) {
            let data = JSON.parse(localStorage.getItem('cart'));
            let newData = data.map(e=> {
                return products[e];
            })
            let t= newData.reduce((acc,e)=>{
                return acc+e.price;
            } , 0)
            setNewProducts(newData);
            setTotal(t);
            console.log(t);
        }
        else {
            setNewProducts([]);
        }
    },[render])

  return (
    <div style={{ height: "630px" }}>
      <div className="bg-gradient-to-l to-amber-300 from-stone-400 h-96 w-full z-20">
        <div className="w-full flex items-center justify-center">
          <div className="relative md:top-20 bg-white shadow rounded py-6 lg:px-28 px-8 md:mx-24">
            <Container className="row justify-content-evenly mx-auto py-2">
              <h2 className="text-center mb-4 text-3xl"> My Cart </h2>
              {newProducts.length==0 ? <h2 className="text-center mb-4 text-2xl"> You Don't Have Any Item In a Cart </h2> : 
              <h2 className="text-center mb-4 text-2xl"> You Have {newProducts.length} Items In Cart </h2>}
              {newProducts?.map((item, index) => (
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
                            let data = JSON.parse(localStorage.getItem('cart'));
                            if(data.length ==1) {
                                localStorage.removeItem('cart');
                            } 
                            else {
                            data = data.filter( (ele,i)=> {
                               return i !== index;
                            });
                            localStorage.setItem('cart', JSON.stringify(data));
                            }
                            setRender(!render);
                        }}
                      >
                        Remove From Cart
                      </Button>
                  </div>
                </MDBCardBody>
              </MDBCard>
              ))}
              <h2 className="text-3xl text-center">Total : {total} $</h2>
              <button
                onClick={()=>{
                    localStorage.removeItem('cart');
                    const MySwal = withReactContent(Swal)
                    MySwal.fire({
                        title: <strong>Thanks For Order , We will contact with you soon</strong>,
                        html: <i>You will go to shop Page</i>,
                        icon: 'success',
                        timer: 2000
                    })
                    setTimeout(() => {
                        navigate('/shop');
                    }, 3000);
                }}
                type='submit' className="mt-9 w-48 text-base font-semibold leading-none text-dark py-4 px-10 bg-amber-300 rounded hover:bg-amber-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                Place Order
              </button>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};
