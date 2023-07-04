import React from "react";
import { styled } from "styled-components";
import BtnStd from "./button/std";
import Card from "./card";

const Box = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TopMenu = styled.div`
  display: flex;

  padding: 8px;
`;
const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HR = styled.div`
  width: 85%;
  height: 1px;
  margin: 20px 0;
  background-color: var(--color-blue-3);
`;

export default function MiddleArticle() {
  return (
    <Box>
      <TopMenu>
        <BtnStd name="Agências" />
        <BtnStd name="Chatbot" />
        <BtnStd name="Marketing Digital" />
        <BtnStd name="Geração de Leads" />
        <BtnStd name="Mídia Paga" />
        <span>Ordenar por</span>
        <select>
          <option value="teste">Data de publicação</option>
        </select>
      </TopMenu>
      <HR />
      <Menu>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Menu>
      <HR />
    </Box>
  );
}
