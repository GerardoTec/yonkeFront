import React, { useState } from "react";
import { usePieza } from "../../Context/PiezaContext";
import { SideBarNew } from "../../components/SideBar/SideBar";
import ListadoImage from "./ListadoImage";
import ContenedorImage from "./ContenedorImage";

const DetallePieza = () => {
  const { piezaSeleccionada } = usePieza();
  const [urlImagen, setUrlImagen] = useState(null);
  console.log(urlImagen);
  return (
    <div className="flex">
      <div>
        <SideBarNew />
      </div>
      <div className="p-4 h-screen bg-gray-100 w-full">
        <div>
          <h1 className="text-black font-bold p-4">Detalle pieza</h1>
        </div>
        <div className="w-full p-3 bg-white rounded-md">
          <div className="flex justify-around">
            <p>
              Nombre: <span>{piezaSeleccionada.nombre}</span>
            </p>
            <p>
              Marca: <span>{piezaSeleccionada.marca}</span>
            </p>
            <p>
              Modelo: <span>{piezaSeleccionada.modelo}</span>
            </p>
            <p>
              Año: <span>{piezaSeleccionada.anio}</span>
            </p>
            <p>
              Estatus: <span>{piezaSeleccionada.anio}</span>
            </p>
            <p>
              Precio: <span>{piezaSeleccionada.precio}</span>
            </p>
          </div>
          <div class="relative inline-block group">
            <span class="text-xl cursor-pointer group-hover:text-blue-500">
              ?
            </span>
            <div class="absolute bg-gray-800 w-96  text-white text-center py-2 px-4 rounded-lg mt-2 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
              {piezaSeleccionada.descripcion}
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-3">
          <div className="bg-white w-3/12 rounded h-3/6">
            <ListadoImage
              archivos={piezaSeleccionada.archivos}
              idPieza={piezaSeleccionada.id}
              setUrlImagen={setUrlImagen}
            />
          </div>
          <div className="bg-white w-1/2 rounded">
            <ContenedorImage urlImagen={urlImagen} />
          </div>
          <div className="bg-white w-1/4 rounded">venta</div>
        </div>
      </div>
    </div>
  );
};

export default DetallePieza;
