import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import MenuFooter from "./menuFooter";

export default function Footer() {
  return (
    <div>
      <Image src={logo} alt="logo" width={194} height={42} />

      <div>
        <MenuFooter
          title="Links Principais"
          items={["Home", "Ferramentas", "Preços", "Contato"]}
        />

        <MenuFooter
          title="Links Principais"
          items={["Home", "Ferramentas", "Preços", "Contato"]}
        />
      </div>
    </div>
  );
}
