import React from 'react';
import { useDispatch} from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  NativeSelect,
  InputLabel,
  Button, 
  
} from '@material-ui/core'
import {Image, Row, Col, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {addToCart, removeFromCart} from '../actions';





const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
        
      },
    },
  }))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
    borderBlockEndStyle: " "
  },
});

export default function OrderTable({props}) {
  
   const dispatch = useDispatch();
   
  

  
  const removeFromCartHandler = productId => {
    dispatch(removeFromCart(productId));
  }

  const classes = useStyles();

  return (
   
    <TableContainer component={Paper}>
    
      <Table className={classes.table} aria-label="customized table">
        
        <TableBody>

        {props.length < 0 && "CART IS EMPTY" }
        {props.map(item => {
            return (
               
                    <StyledTableRow key={item._id }>
                        <Container fluid>
               <Row>
                   <Col lg="6">
                        <StyledTableCell style={{width:'20%'}}>
                            <Row>
                                <Col lg="4">
                                    <Image src={item.image[0]} thumbnail />
                                </Col>
                                <Col lg="8" className="mt-2">
                                {item.name}
                                 
                                 <p><b>Color:</b> {item.color}    <b className="ml-4">Size: {item.size}</b></p>

                                 <p color="primary" size="small">  
                                     <Link to="/">
                                        Edit
                                    </Link> | 

                                 <Link to='/'>
                                        Move to Wish List
                                    </Link> | 
                                    <Button 
                                         color="secondary" 
                                        size="small" 
                                        variant="text"
                                        onClick={() => removeFromCartHandler(item._id)}   
                                    >
                                        remove
                                    </Button>
                                </p>
                                </Col>
                        
                            </Row> 
                       
                         </StyledTableCell>
                    </Col>

                    <Col className="sm" lg="1">
                        
                         <StyledTableCell >
                         <Row>
                         <FormControl className={classes.formControl}>
        <InputLabel htmlFor="">Quantity</InputLabel>
        <NativeSelect value={item.qty} onChange={(e) => dispatch(addToCart(item._id, e.target.value,item.color,item.size))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </NativeSelect>
                           </FormControl>
                             </Row>
                         </StyledTableCell>
                        
                    </Col>

                    <Col lg="3">
                        <Row>
                            <Col>
                    <StyledTableCell >
                    <FormControl component="fieldset" size="small">
                        <FormLabel component="legend">Delivery</FormLabel>
                        <RadioGroup aria-label="delivery" name="delivery1">
                        
                            <FormControlLabel value="Ship to Me" size="small" control={<Radio color="primary"/>} label="Ship to Me" />
                            <FormControlLabel value="In-Store Pickup" control={<Radio color="primary" />} label="In-Store Pickup"  />
                            <FormControlLabel value="Curbside Pickup" control={<Radio color="primary" />} label="Curb Pickup" />
                          
                        </RadioGroup>
                    </FormControl>
                    </StyledTableCell>
                    </Col>
                    </Row>
                    </Col>

                    <Col lg="2">
                        <Row>
                           
                        <StyledTableCell ><b>$ {item.price * item.qty}</b></StyledTableCell>
                        </Row>
                   
                    </Col>
                    
                    
                     </Row>
                     </Container>
                     </StyledTableRow>
               
               
            )
        })}
                
                
            

        </TableBody>
      </Table>
    </TableContainer>
  
  );
}
