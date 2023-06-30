import React, { useState } from "react";
import video from "../../public/thumbnail.png";
import Image from "next/image";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const CardVideo = styled.div`
  position: relative;
  border-radius: 12px;
  max-width: 362px;
  margin: 10px;

  box-shadow: 4px 10px 22px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;

  &:hover {
    color: var(--color-blue-2);
    /* .image_overlay {
      opacity: 1;
      transition: opacity 0.4s ease;
      position: absolute;
    } */
  }
`;

const TextP = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 48px;
  color: white;
  opacity: 0;
  transition: opacity 0.4s ease;
  transform: translate(-50%, -50%);
`;
const ImgContainer = styled.div`
  position: relative;
`;

const ImgOver = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(70, 100, 255, 0.219);
  transition: opacity 0.4s ease;
`;

export default function Card() {
  const [isHover, setIsHover] = useState(false);

  return (
    <CardVideo
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ImgContainer>
        <ImgOver style={{ opacity: isHover ? 1 : 0 }} />
        <Image src={video} alt="tumb" width={362} height={204} />
      </ImgContainer>

      <TextP>Como aumentar sua geração de Leads feat. Traktor</TextP>

      <PlayIcon style={{ opacity: isHover ? 1 : 0 }}>
        <FontAwesomeIcon icon={faPlay} />
      </PlayIcon>
    </CardVideo>
  );
}
