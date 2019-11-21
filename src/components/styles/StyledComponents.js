// #9f7e69 brown / toast
// #d2bba0 light brown / akaroa
// #f2efc7 mint julep
// #f7ffe0 spring sun
// #ffeee2 light pink / serenade

import styled from "styled-components";

export const FormDiv = styled.div`
  margin: 0 auto 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #d2bba0;
`;

export const AddTruckCard = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #FFFFFF;
  border-radius: 5px;
`

export const H1 = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const CustomInput = styled.input`
  display: block;
  border: 1px solid black;
  height: 1.5rem;
  font-size: 1.25rem;
  margin: 0 auto 1rem auto;
`;
export const CustomSelect = styled.select`
  height: 3rem;
  font-size: 3rem;
`;

export const CustomBtn = styled.button`
  margin: 1rem 0;
  padding: 1rem;
  font-size: 1rem;
  background: #f2efc7;
  border-radius: 5px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`;

export const CustomLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
`

export const TextArea = styled.textarea`
  height: 4rem;
  width: 8rem;
  font-size: .75rem;
  margin-bottom: 1rem;
`

export const MenuList = styled.ul`
  background: #f2efc7;
  padding: 2rem;
`
