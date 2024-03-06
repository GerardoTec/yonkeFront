import { Info, InfoIcon } from "lucide-react";
import React, { useState } from "react";
import Viewer from "react-viewer";

const ContenedorImage = ({ urlImagen }) => {
  const [visible, setVisible] = useState(false);

  // Función para abrir el visor
  const handleOpen = () => {
    setVisible(true);
  };

  // Función para cerrar el visor
  const handleClose = () => {
    setVisible(false);
  };
  console.log(urlImagen);
  return (
    <div className="w-11/12 h-72 m-auto mt-4">
      <div className="w-full my-2 ml">
        <InfoIcon />
      </div>
      <img
        src={urlImagen}
        alt="Descripción de la imagen"
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          width: "100%",
          height: "100%",
          objectFit: "fill",
        }}
      />

      {/* Configura el visor */}
      <Viewer
        visible={visible}
        onClose={handleClose}
        images={[{ src: urlImagen, alt: "Descripción de la imagen" }]}
      />
    </div>
  );
};

export default ContenedorImage;
