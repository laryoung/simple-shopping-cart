import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function QuantitySelector(props) {
  const classes = useStyles();
 

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="">Quantity</InputLabel>
        <NativeSelect
          value={props.qty}
          onChange={props.handleQtyChange}
          
        >
          
          <option value={props.qty} selected>{props.qty}</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </NativeSelect>
       
      </FormControl>
     
    </div>
  );
}
