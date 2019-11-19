import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const MenuForm = ({ errors, touched, values, status }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    status && setItems(item => [...item, status]);
  }, [status]);

  return (
    <div className='menuForm'>
      <h1>Operator: Tell us about the items on your menu!</h1>

      <Form>

        {/* Menu item name */}
        <Field type='text' name='itemName' placeholder='Food Item Name'/>
        {touched.itemName && errors.itemName && (
          <p className='error>'>{errors.itemName}</p>
        )}

        {/* Menu item description */}
        <Field
          component='textarea'
          type='text'
          name='itemDescription'
          placeholder='Enter the desctiption of your delicious food item!'
        />
        {touched.itemDescription && errors.itemDescription && (
          <p className='error'>{errors.itemDescription}</p>
        )}

        {/* Menu item price */}
        <Field type='text' name='itemPrice' placeholder='Item Price'/>
        {touched.itemPrice && errors.itemPrice && (
          <p className='error'>{errors.itemPrice}</p>
        )}

        {/* Menu item image */}

      </Form>

      {items.map(item => (
        <ul className='menuItemCard'>
          <li>Item Name: {item.itemName}</li>
          <li>Description: {item.itemDescription}</li>
          <li>Price: {item.itemPrice}</li>
        </ul>
      ))}

    </div>
  )
}

const FormikMenuForm = withFormik({
  mapPropsToValues({ itemName, itemDescription, itemPrice }) {
    return {
      itemName: itemName || '',
      itemDescription: itemDescription || '',
      itemPrice: itemPrice || ''
    };
  },

  validationSchema: Yup.object().shape({
    itemName: Yup.string().required('Please enter a name for your item!'),
    itemDescription: Yup.string().required('Please enter a description for your item!'),
    itemPrice: Yup.string().required('Please enter a price for your item!')
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('', values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(error => console.log(error.response))
  }
})(MenuForm);

export default FormikMenuForm;
