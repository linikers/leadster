import React from "react";
import { styled } from "styled-components";

const Button = styled.button`
  color: var(--color-blue-2);
  padding: 10px 20px;
  border: 2px solid var(--color-blue-2);
  cursor: pointer;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  border-top-left-radius: 12px;
`;
export default function BtnBlue() {
  return <Button>WEBINARS EXCLUSIVOS</Button>;
}
