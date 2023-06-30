import React, { useState } from "react";
import video from "../../public/thumbnail.png";
import Image from "next/image";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const CardVideo = styled.div`
  border-radius: 12px;
  max-width: 362px;
  margin: 10px;

  box-shadow: 4px 10px 22px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;

  &:hover .play_icon {
    opacity: 1;
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
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: white;
  opacity: ${({ isHover }) => (isHover ? 1 : 0)}
  transition: opacity 0.4s ease;
`;
export default function Card() {
  const [isHover, setIsHover] = useState(false);

  return (
    <CardVideo
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image src={video} alt="tumb" width={362} height={204} />
      <TextP>Como aumentar sua geração de Leads feat. Traktor</TextP>
      <PlayIcon>
        <FontAwesomeIcon icon={faPlay} classname="play_icon" />
      </PlayIcon>
    </CardVideo>
  );
}
