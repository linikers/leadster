import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import logo from "../../public/logo.png";

const ContainerLogo = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
export default function Header() {
  return (
    <header>
      <ContainerLogo>
        <Image src={logo} alt="Leadster Corp" width={194} height={42} />
      </ContainerLogo>
    </header>
  );
}
