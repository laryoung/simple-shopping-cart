import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


function Quantity(props){
    const {decrement, increment, value } = props
    
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& > *': {
            marginBottom: theme.spacing(2),
          },
          '& .MuiBadge-root': {
            marginRight: theme.spacing(4),
          },
        },
      }));

      const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup>
          
          <Button
            aria-label="increase"
            onClick={increment}
          >
            <AddIcon fontSize="small" />
          </Button>

          <Button
            aria-label="reduce"
           
          >
            {value < 1 ? 1 : value}
          </Button>

          <Button
            aria-label="reduce"
            onClick={
              decrement
            }
          >
            <RemoveIcon fontSize="small" />
          </Button>

        </ButtonGroup>
        </div>
    )
}

export default Quantity