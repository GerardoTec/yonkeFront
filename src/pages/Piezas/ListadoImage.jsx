import React from "react";
import { axiosRequest } from "../../accions/Login/login.accion";

const ListadoImage = ({ archivos, idPieza, setUrlImagen }) => {
  const mostrarImagen = async (nombre) => {
    try {
      //   setLoading(true);
      const imagen = await axiosRequest({
        method: "GET",
        url: `http://localhost:3001/api/yonke/piezas/${idPieza}/${nombre}`,
        responseType: "arraybuffer", // Cambia a arraybuffer para obtener datos binarios
      });

      // Crea un Blob a partir de los datos binarios
      const blob = new Blob([imagen.data], { type: "image/JPG" }); // Ajusta el tipo según el formato de tu imagen

      // Crea la URL del objeto Blob
      const urlImages = URL.createObjectURL(blob);
      console.log(urlImages);
      setUrlImagen(urlImages);
      //   await new Promise((resolve) => setTimeout(resolve, 2000));
      //   setListado(listado.data);
      //   if (listado.data.length === 0)
      //     showErrorNotification("No se encontro piezas con la información.");
      //   setLoading(false);
    } catch (error) {
      //showErrorNotification(error.response.data.message);
    }
  };
  return (
    <div>
      {archivos.map((image, index) => (
        <p
          className="bg-gray-100 rounded p-2 mt-2 w-11/12 m-auto cursor-pointer active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out"
          key={index}
          onClick={() => mostrarImagen(image.nombre)}
        >
          {image.nombre}
        </p>
      ))}
    </div>
  );
};

export default ListadoImage;
