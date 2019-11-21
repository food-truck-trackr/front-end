import React, { useState, useEffect } from 'react';
import TruckFormLocation from './TruckFormLocation';
import axiosWithAuth from '../../utils/AxiosWithAuth';

import { FormDiv, H1, CustomInput, CustomBtn, } from '../styles/StyledComponents';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const AddTruckForm = props => {
  const [truck, setTruck] = useState({ name:'' });

  const handleChanges = e => {
    setTruck({...truck, [e.target.name]: e.target.value})
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth().post('https://food-truck-trakr.herokuapp.com/api/trucks', truck)
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error.response));
    console.log(truck);
  };

  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
  }));

  const classes = useStyles();

  return (
    <FormDiv>
      <form onSubmit = { submitForm }>
        <H1>Truck Operator: Add your truck info here!</H1>

        <CustomInput
          placeholder='Truck Name'
          id = 'name'
          type = 'text'
          name = 'name'
          onChange = { handleChanges }
        />

        <h3>What type of cuisine do you offer?</h3>
        <select name='cuisine'>
          <option value=''>Please Select a Cuisine Type</option>
          <option value='bbq'>BBQ</option>
          <option value='beer'>Beer</option>
          <option value='breakfast'>Breakfast</option>
          <option value='burgers'>Burgers</option>
          <option value='dessert'>Dessert</option>
          <option value='greek'>Greek</option>
          <option value='pizza'>Pizza</option>
          <option value='tacos'>Tacos</option>
        </select>

        <h3>What is the current location of your truck?</h3>
        <TruckFormLocation />

        <h3>When will you be leaving for your next location?</h3>

        <div className='datePickerContain'>
          {/* <form className={classes.container} noValidate> */}
            <TextField
              id="datetime-local"
              label="Leaving for next location"
              type="datetime-local"
              defaultValue="2019-01-01T00:00"
              name='departureTime'
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
              }}
            />
          {/* </form> */}
        </div>

        <h3>When will you be arriving at your next location?</h3>

        <div className='datePickerContain'>
          {/* <form className={classes.container} noValidate> */}
            <TextField
              id="datetime-local"
              label="Leaving for next location"
              type="datetime-local"
              defaultValue="2019-01-01T00:00"
              name='departureTime'
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
              }}
            />
          {/* </form> */}
        </div>

        <CustomBtn type='submit'>Submit Your Truck Info!</CustomBtn>
      </form>
      
      <a href='/MenuForm'><CustomBtn>Go to menu entry form!</CustomBtn></a>

    </FormDiv>
  )
}

export default AddTruckForm;