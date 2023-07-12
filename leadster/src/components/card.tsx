import React, { useState } from "react";
import Image from "next/image";
import video from "../../public/thumbnail.png";
import youtube from "../../public/youtube.jpg";
import styled from "styled-components";
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

const HR = styled.div`
  width: 90%;
  height: 1px;
  margin: 6px 0;
  background-color: var(--color-blue-1);
`;
//modal conf

const CustomModal = styled(Modal)``;
const BoxModal = styled.div`
  display: flex;
  flex-direction: column;
`;

const LineTop = styled.div`
  width: 97%;
  height: 3px;
  background-color: var(--color-blue-2);

  margin-left: auto;
  margin-right: auto;
`;
const ModalTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    color: var(--color-blue-3);
    padding: 16px 44px;
    font-size: 22px;
    text-align: center;
  }
  b {
    color: var(--color-blue-2);
  }
  span {
    margin-bottom: 16px;
    padding: 2px;

    color: var(--color-blue-3);
    cursor: pointer;
  }
`;
const ModalFooter = styled.div`
  color: var(--color-blue-3);

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 18px;
    margin: 2rem;
  }
  p {
    font-size: 16px;
    margin: 2rem;
  }
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
      </CardVideo>
      <CustomModal
        isOpen={openModal}
        onRequestClose={closeModal}
        overlayClassName="custom-modal-overlay"
        shouldFocusAfterRender={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
          },
          content: {
            position: "absolute",
            maxWidth: "30%",

            border: "none",
            borderRadius: "12px",
            background: "white",

            transform: "translate(108%, 0%)",
          },
        }}
        contentLabel=""
      >
        <BoxModal>
          <LineTop />
          <ModalTop>
            <p>
              <b>Webinar:</b> Como aumentar sua geração de Leads feat. Traktor
            </p>
            <span onClick={closeModal}>X</span>
          </ModalTop>
          <ModalFooter>
            <Image src={youtube} alt="video" width={428} height={241} />
            <h3>Descrição</h3>
            <HR />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vel nisi in lorem consequat sollicitudin. Quisque accumsan lorem
              et mi pulvinar, quis ultricies elit volutpat. Integer ac lectus et
              risus consequat lacinia.
            </p>
          </ModalFooter>
        </BoxModal>
      </CustomModal>
    </>
  );
}
