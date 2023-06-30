import React from "react";
import { styled } from "styled-components";

const Button = styled.button`
  color: var(--color-blue-2);

  padding: 10px 20px;
  border: 2px solid var(--color-blue-3);
  margin: 6px;
  cursor: pointer;
  border-radius: 12px;
`;

interface Props {
  name: string;
}

export default function BtnStd(props: Props) {
  return <Button>{props.name}</Button>;
}
