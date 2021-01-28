import React, {useState} from 'react';
import { Container, Row} from 'react-bootstrap';

function LeftTitleContent() {
    const [email, setEmail] = useState("")
    return(
        <Container>
            <Row>
                <small> Find a Store </small> | <small> Contact </small>
                |  <span>  
                    <form className="form-inline">
                        <input  
                            className="form-control form-control-sm"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange = {e => setEmail(e.target.value)}
                        />
                        <input className="btn btn-sm btn-primary" type="submit" value="JOIN" />
                    </form>
                </span>
             </Row> 
         </Container>
    )
}

export default LeftTitleContent