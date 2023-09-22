import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Card,
  CardImg,
} from "reactstrap";

export default function Carrusel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images] = useState([
    { id: 1, src: "./images/carrusel1.png", alt: "Imagen 1" },
    { id: 2, src: "./images/carrusel2.png", alt: "Imagen 2" },
    { id: 3, src: "./images/carrusel1.png", alt: "Imagen 3" },
    { id: 4, src: "./images/carrusel2.png", alt: "Imagen 4" },
  ]);

  const toggleModal = (image) => {
    setModalOpen(!modalOpen);
    setSelectedImage(image);
  };

  return (
    <Container>
      <Row className="justify-content-center ">
        {images.map((image) => (
          <Col key={image.id} xs="9" sm="4" md="3" className="pb-4">
            <Card onClick={() => toggleModal(image)}>
              <CardImg
                top
                src={image.src}
                alt={image.alt}
                style={{ cursor: "pointer" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Modal isOpen={modalOpen} toggle={() => toggleModal(null)}>
        <ModalHeader toggle={() => toggleModal(null)}>
          {selectedImage ? selectedImage.alt : ""}
        </ModalHeader>
        <ModalBody>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="img-fluid"
            />
          )}
        </ModalBody>
      </Modal>
    </Container>
  );
}
