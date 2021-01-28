import React from 'react';
import { Container, Row, Image} from 'react-bootstrap';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

function RightTitleContent() {
   
    return(
        <Container>
            <Row>
                <small> Welcome, Sign In</small> | 
                <small> Ship To 
                    <Image src="https://bfx-objects.prd.borderfree.com/v1/dist/images/context-chooser/flags/US.gif"/>
                </small>
                |  <span>  
                    <AddShoppingCart />
                </span>
             </Row> 
         </Container>
    )
}

export default RightTitleContent