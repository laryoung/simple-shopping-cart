import React, {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { addToCart } from '../actions'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
 
});

export default function CheckOut(props) {
  const [discount, setDiscount] = useState('')
  
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cartItems)
 
  const handleInputChange = e => {
      const {value } = e.target
      setDiscount(value)
  }
  
  
   const handleSubmit = (e) => {
     
    e.preventDefault()
  
    if(discount){
      cart.map(item => 
        dispatch(addToCart(item._id,item.qty,item.color,item.size,0.5))
    )
     
    }
     
  }
 
  
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
        <CardHeader title="Order Summary"
         style={{background:'#0b0340',color:'white'}}
            subheader="1 Item"
           
        />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" bgcolor="blue" gutterBottom>
         Subtotal
         <span className="float-right"><b>$ {props.subtotal} </b></span>
        </Typography>
        <Typography className={classes.title} color="textSecondary" bgcolor="blue" gutterBottom>
           Sales Tax
        </Typography>

        <Typography className={classes.title} color="textSecondary" bgcolor="blue" gutterBottom>
          ESTIMATED TOTAL*
          <span className="float-right"><b>$ {props.subtotal} </b></span>

        </Typography>

        <Typography className={classes.title} color="textSecondary" bgcolor="blue" gutterBottom>
           or 4 payments of 12.00 by 
        </Typography>
        
      </CardContent>
      <CardActions>
          <Container>
           
                <Row>
                <form onSubmit={handleSubmit}>
                    <Form.Row>
                      <Col lg="8">
                        
                        <Form.Group >
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Promo Code" 
                            onChange = {handleInputChange}
                            value = {discount}
                          />
                        </Form.Group>
                        </Col>
                        <Form.Group >
                        <Button 
                              variant="contained" 
                              color="primary" 
                               type="submit"
                              
                              >
                              Apply
                         </Button>
                        </Form.Group>
                    </Form.Row>
                </form>
                </Row>
                <Row>
                    <Col lg="12" className="mt-3">
                        <Button size="large" 
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick ={handleSubmit}
                        >
                            CHECKOUT
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col lg="12" className="mt-3">
                        <Button size="" 
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                          Pay with PayPal
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col lg="12" className="mt-3">
                        <Button size="" 
                            variant="contained"
                            color="default"
                            fullWidth
                        >
                    Pay with Amazon
                        </Button>
                    </Col>
                </Row>
          
          </Container>
        
         
      </CardActions>

     
      
    </Card>
  );
}
