import React, { useState } from 'react';
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

import { FormDiv, H1, CustomInput, CustomBtn, CustomLabel, TextArea, MenuList } from '../styles/StyledComponents';

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

        <CustomLabel for='itemDescripton'>Item Description:</CustomLabel>
        <TextArea

          placeholder='Tell us about your menu item!'
          id='itemDescription'
          name='itemDescription'
          onChange = { handleChanges }
          value = { items.itemDescription }
        />
        

        {/* Menu item price */}
        <CustomLabel for='itemPrice'>Item Price:</CustomLabel>
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

      <MenuList>
        <li>Item Name: {items.itemName}</li>
        <li>Description: {items.itemDescription}</li>
        <li>Price: {items.itemPrice}</li>
      </MenuList>

    </FormDiv>
  )
}

export default MenuForm;
