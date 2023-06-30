import React from "react";
import BtnBlue from "./button/blue";
import { styled } from "styled-components";
import Image from "next/image";
import asset from "../../public/asset-header.png";

const Box = styled.div`
  background-color: var(--color-blue-0);
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H3 = styled.h3`
  color: var(--color-blue-3);
  font-size: 38px;
`;
const H2 = styled.h2`
  color: var(--color-blue-2);
  font-size: 68px;
  position: relative;
`;
const IconImage = styled(Image)`
  position: absolute;
  top: 4px;
  right: -24px;
`;
const HR = styled.div`
  width: 60%;
  height: 1px;
  margin: 20px 0;
  background-color: var(--color-blue-3);
`;
const P = styled.h4`
  color: var(--color-blue-3);
  font-size: 16px;
`;
export default function TopArticle() {
  return (
    <Box>
      <BtnBlue />
      <H3>Menos Conversinha,</H3>
      <H2>
        Mais Conversão
        <IconImage src={asset} alt="icone" width={49} height={32} />
      </H2>
      <HR />
      <P>
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplica-las em
        seu negócio{" "}
      </P>
    </Box>
  );
}
