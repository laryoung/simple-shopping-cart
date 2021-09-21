import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import OrderTable from './OrderTable';
import Checkout from '../components/CheckOut';
import CartBag from '../components/CartBag'

function Cart(props){

   const cart = useSelector(state => state.cart)
   
   const { cartItems } = cart;

   const subtotal = cartItems.reduce((a, c) => a + c.price * c.qty,0)
   
  return (
    <Container fluid className="mt-5" style={{paddingLeft:'5rem',paddingRight:'5rem'}}>
      <Row>
        <Col className="col-sm"  lg={9}>
          <Row>
            <Col lg={8}>
                <CartBag props= '8'/>
             </Col>
            <Col lg={4}>
            <ProgressBar now={100} variant="success" />
            <p style={{color:'darkred'}}>You qualify for FREE SHIPPING!</p>
            <span style={{color:'darkred'}}>In-store pick <span style={{color:'black'}}>is </span> Always free</span>
            <p></p>
            </Col>
            
           
          </Row>
          
          <Divider/>
          <div>
            <p>
            <span style={{color:'green'}}>CHECK! SAME DAY SHIPPING -</span> <Link to='/'>Check Availability</Link>
            </p>
           
          </div>

          <Col lg={12}>
            <Row>
              <OrderTable props = {cartItems} />
            </Row>
            
          </Col>
          <p></p>
          <Divider />
          <p>Don't see all your shopping bag items? Please sign-in</p>
        </Col>
       
        <Col className="col-sm"  lg={3}>
          <Checkout subtotal={subtotal} items = {cartItems}/>
        </Col>
      </Row>
    </Container>
  )
   
}

export default Cart