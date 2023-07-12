import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import MenuFooter from "./menuFooter";
import styled from "styled-components";

import Social from "./social";

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterBar = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContactBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 22px;
`;
const Box = styled.div`
  span {
  }
  a {
    color: var(--color-blue-3);
  }
`;
export default function Footer() {
  return (
    <FooterBox>
      <Image src={logo} alt="logo" width={194} height={42} />

      <FooterBar>
        <MenuFooter
          title="Links Principais"
          items={["Home", "Ferramentas", "Preços", "Contato"]}
        />

        <MenuFooter
          title="Cases"
          items={[
            "Geração de Leads B2B",
            "Geração de Leads em Software",
            "Geração de Leads Imobiliárias",
            "Cases de Sucesso",
          ]}
        />

        <MenuFooter
          title="Materiais"
          items={[
            "Blog",
            "Parceria com Agências",
            "Guia Definitivo do Marketing",
            "Materiais Gratuitos",
          ]}
        />
        <div>
          <Social />

          <ContactBox>
            <Box>
              <span>E-mail: </span>
              <a>contato@leadster.com.br</a>
            </Box>
            <Box>
              <span>Contato: </span>
              <a>(44)8899-3322</a>
            </Box>
          </ContactBox>
        </div>
      </FooterBar>
    </FooterBox>
  );
}
