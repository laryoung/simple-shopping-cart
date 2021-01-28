import React from 'react';
import { Container , Row, Col,Image } from 'react-bootstrap';

import LeftTitleContent from './LeftTitleContent';
import RightTitleContent from './RightTitleContent';

function TitleBar(){
    return(
        <div>
            <Container className="mt-3">
                <Row>
                    <Col  xs={4}>
                        <LeftTitleContent/>
                    </Col>
                    <Col xs={4}>
                    <Image 
                        src="https://www.vineyardvines.com/on/demandware.static/-/Sites-Vineyard-Vines-Library/default/dw9f11cce3/images/logos/logo@2.6x.png" 
                        fluid 
                    />
                    </Col>
                    <Col xs={4}>
                         <RightTitleContent/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TitleBar