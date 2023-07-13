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
const BoxArticle = styled.div`
  display: flex;
  align-items: center;
`;
const BoxPag = styled.div`
  display: flex;
  flex-direction: row;
`;
const BtnPag = styled.div`
  margin: 10px;

  color: var(--color-blue-3);

  cursor: pointer;
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
      <BoxArticle>
        <span>Página</span>
        <BoxPag>
          <BtnPag>1</BtnPag>
          <BtnPag>2</BtnPag>
          <BtnPag>3</BtnPag>
          <BtnPag>4</BtnPag>
        </BoxPag>
      </BoxArticle>
    </Box>
  );
}
