import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const LinkAwe = styled.a`
  margin: 4px;
  color: var(--color-blue-3);
`;

export default function Social() {
  return (
    <div>
      <LinkAwe href="#">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </LinkAwe>
      <LinkAwe href="#">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </LinkAwe>
      <LinkAwe href="#">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </LinkAwe>
    </div>
  );
}
