import React from "react";
import styled from "styled-components";

interface MenuProps {
  title: string;
  items: string[];
}

const BoxMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 22px;
`;

const H3 = styled.h3`
  font-size: 18px;
  color: var(--color-blue-3);
`;
const Ul = styled.ul`
  font-size: 16px;
  color: var(--color-blue-2);

  list-style-type: none;

  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  margin-top: 6px;
`;
export default function MenuFooter({ title, items }: MenuProps) {
  return (
    <BoxMenu>
      <H3>{title}</H3>
      <Ul>
        {items.map((item, index) => (
          <Li key={index}>{item}</Li>
        ))}
      </Ul>
    </BoxMenu>
  );
}
