import React, { useState } from "react";
import Image from "next/image";
import video from "../../public/thumbnail.png";
import youtube from "../../public/youtube.jpg";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

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
// const ButtonModal = styled.button`
//   padding: 10px 20px;
// `;
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
const CustomModal = styled(Modal)`
  max-width: 320px;
  max-height: 360px;
`;
const ModalTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Card() {
  const [isHover, setIsHover] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleCard = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <CardVideo
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleCard}
      >
        <ImgContainer>
          <ImgOver style={{ opacity: isHover ? 1 : 0 }} />
          <Image src={video} alt="tumb" width={362} height={204} />
        </ImgContainer>

        <TextP>Como aumentar sua geração de Leads feat. Traktor</TextP>

        <PlayIcon style={{ opacity: isHover ? 1 : 0 }}>
          <FontAwesomeIcon icon={faPlay} />
        </PlayIcon>
        {/* <ButtonModal>clique</ButtonModal> */}
      </CardVideo>
      <CustomModal isOpen={openModal} onRequestClose={closeModal}>
        <div>
          <ModalTop>
            <p>Webinar: Como aumentar sua geração de Leads feat. Traktor</p>
            <span onClick={closeModal}>X</span>
            <div>
              <Image src={youtube} width={306} height={172} />
              <h3>Descrição</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nisi in lorem consequat sollicitudin. Quisque accumsan lorem
                et mi pulvinar, quis ultricies elit volutpat. Integer ac lectus
                et risus consequat lacinia.
              </p>
            </div>
          </ModalTop>
        </div>
      </CustomModal>
    </>
  );
}
