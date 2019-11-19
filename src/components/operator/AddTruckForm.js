import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddTruckForm = ({ errors, touched, values, status }) => {
  const [truck, setTruck] = useState([]);
  useEffect(() => {
    status && setTruck(truck => [...truck, status]);
  }, [status]);

  return (
    <div className='addTruckForm'>
      <h1>Truck Operator: Add your truck info here!</h1>
      
      <Form>

        {/* Truck name */}
        <Field type='text' name='truckName' placeholder='Truck Name' />
        {touched.truckName && errors.truckName && (
          <p className='error'>{errors.truckName}</p>
        )}

        {/* Cuisine Type Selector */}
        <Field component='select' className='cuisineSelect' name='cuisineSelect'>
          <option>Please Select a Cuisine Type</option>
          <option value='bbq'>BBQ</option>
          <option value='beer'>Beer</option>
          <option value='breakfast'>Breakfast</option>
          <option value='burgers'>Burgers</option>
          <option value='dessert'>Dessert</option>
          <option value='greek'>Greek</option>
          <option value='pizza'>Pizza</option>
          <option value='tacos'>Tacos</option>
          <option value='other'>Other</option>
        </Field>
        {touched.cuisineSelect && errors.cuisineSelect && <p className='error'>{errors.cuisineSelect}</p>}

        {/* Image upload */}

        {/* Current location */}

        {/* Next location */}

        {/* Departure Time */}

        {/* Arrival Time */}

        <button type='submit'>Submit your truck info!</button>

      </Form>

      {/* Button Linked to Menu Form */}
      <div className='menuButton'>
        <button>Add menu info for your truck!</button>
      </div>

    </div>
  )
}

const FormikAddTruckForm = withFormik({
  mapPropsToValues({ truckName, cuisineSelect}) {
    return {
      truckName: truckName || '',
      cuisineSelect: cuisineSelect || ''
    };
  },

  validationSchema: Yup.object().shape({
    truckName: Yup.string().required('Please enter a name for your truck!'),
    cuisineSelect: Yup.string()
      .oneOf(['bbq', 'beer', 'breakfast', 'burgers', 'dessert', 'greek', 'pizza', 'tacos', 'other'])
      .required('Please select a quisine type!')
  }), 

  handleSubmit(values, { setStatus }) {
    axios
      .post('', values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(error => console.log(error.response))
  }
})(AddTruckForm);

export default FormikAddTruckForm;
