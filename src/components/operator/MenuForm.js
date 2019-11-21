import React, { useState } from 'react';
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

import { FormDiv, H1, CustomInput, CustomBtn } from '../styles/StyledComponents';

const MenuForm = props => {
  const [items, setItems] = useState({ itemName: '', itemDescription: '', itemPrice: ''});
  
  const handleChanges = e => {
    setItems({...items, [e.target.name]: e.target.value})
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(items)
  }

  return (
    <FormDiv>
      <form onSubmit = { submitForm }>
        <H1>Truck Operator: Tell us about the items on your menu!</H1>

        <CustomInput
          placeholder='Menu Item Name'
          id='itemName'
          type='text'
          name='itemName'
          onChange = { handleChanges }
          value = { items.name }
        />

        {/* Menu item description */}
        <label for='itemDescripton'>Item Description:</label>
        <textarea
          placeholder='Tell us about your menu item!'
          id='itemDescription'
          name='itemDescription'
          onChange = { handleChanges }
          value = { items.itemDescription }
        />
        

        {/* Menu item price */}
        <CustomInput
          placeholder='Menu Item Price'
          id='itemPrice'
          type='text'
          name='itemPrice'
          onChange = { handleChanges }
          value = { items.price }
        />

        <CustomBtn type='submit'>Submit your menu info!</CustomBtn>

      </form>

      <ul className='menuItemCard'>
        <li>Item Name: {items.itemName}</li>
        <li>Description: {items.itemDescription}</li>
        <li>Price: {items.itemPrice}</li>
      </ul>

    </FormDiv>
  )
}

export default MenuForm;
