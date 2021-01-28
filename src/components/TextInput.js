import React from 'react';
import { PropTypes } from 'prop-types';
import  propTypes  from 'react-bootstrap/esm/Image';

function TextInput({name, 
    placeholder, 
    type, 
    value, 
    className, 
    onChange, 
    ...props}){
    
        return (
            <>
                <input 
                    name = { name }
                    type = { type }
                    value = { value }
                    placeholder = { placeholder }
                    onChange = {onChange}
                    className = {className}
                />  
            </>
        )
}

TextInput.defaultProps = {
    type : "text"
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text','number','email','password']),
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired

}