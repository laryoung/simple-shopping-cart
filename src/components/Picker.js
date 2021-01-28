import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Container, Row, Button} from 'react-bootstrap';
import Quantity from './Quantity';
import { addToCart } from '../actions';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';




const defaultProps = {
  m: 4,
  style: { width: '3rem', height: '3rem' },
  display: 'flex',
  flexDirection: 'row',
};

 function Picker(props) {
   const dispatch = useDispatch()
     let history = useHistory();
    
      const {selectedItem} = props
      
            const [qty, setQty] = useState(1)
            const [color, setColor ] = useState('')
            const [size, setSize] = useState('')

            const handleIncrement = () => {
                setQty(prevCount => prevCount + 1);
              };
            
              //Create handleDecrement event handler
              const handleDecrement = () => {
                setQty(prevCount => prevCount - 1);
              };
             
              const handleAddToCart = () => {
                  dispatch(addToCart(selectedItem._id,qty,color,size))
                history.push('/cart/' )
               };

          return (
              
            <div  className="pointer">
              <Container style={{marginLeft:'-3rem'}}>
                 <Box {...defaultProps} >
                      {  selectedItem.color.map((choice, index) => {
                    return (
                        <div key={index}>
                            <Box  borderRadius="50%" 
                                     border= {1}
                                     borderColor="#0e0a2b"
                                bgcolor={choice} p={2} m={0.2} 
                                style={{ width: '90%' }}
                                
                                 onClick={()=>setColor(choice)}
                            />
                    
                
                        <small>{choice}</small>  
                         </div>
                   )
          
                 })
                }
                 </Box>
             </Container>
        

         <span>Select Size 
            <small>
                <Link to='/'> Size Chart</Link>
              </small>
            </span>
            <Container style={{marginLeft:'-3rem', marginTop:'-2rem'}}>
            
                <Box {...defaultProps} >
                  
                      {selectedItem.size.map((item, index) => {
                    return (
                    <div key={index}>
                       <Box  bgcolor="grey.300" 
                            p={2} m={0.1} 
                            style={{ width: '90%' }}
                             onClick={()=>setSize(item)}
                            
                             >
                      {item} 
                    
                </Box>
                </div>
            
        )
        })
    }
         </Box>
         </Container>
         
           <Quantity 
              decrement = {handleDecrement}  
              increment = {handleIncrement}
              value={qty}
            />
         

         <Container className="mt-5">
            <Row>
            <Button 
              variant="primary" 
              size="lg" 
              block
              onClick={handleAddToCart}
            >
              ADD TO CART
             </Button>
            
          </Row>    
             
         </Container>
        
      </div>
    
    
          )
         
      }

   
  


export default Picker;