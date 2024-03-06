import React, { useState } from "react";
import { axiosRequest } from "../../accions/Login/login.accion";
import { showErrorNotification } from "../../utils/messages";
import { Search } from "lucide-react";

const Filtrado = ({ setLoading, setListado }) => {
  const [filtros, setFiltros] = useState({
    nombre: "",
    marca: "",
    modelo: "",
    anio: "",
  });

  const handleFiltros = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFiltros((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(filtros);
  };

  const buscarPiezas = async () => {
    const { nombre, marca, modelo, anio } = filtros;
    try {
      setLoading(true);
      const listado = await axiosRequest({
        method: "POST",
        url: "http://localhost:3001/api/yonke/piezas/busqueda",
        data: {
          nombre: nombre,
          marca: marca,
          modelo: modelo,
          anio: anio,
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setListado(listado.data);
      if (listado.data.length === 0)
        showErrorNotification("No se encontro piezas con la información.");
      setLoading(false);
    } catch (error) {
      showErrorNotification(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-around bg-gray-50 p-2 mb-2">
      <div className="w-1/4 md:w-1/2 lg:w-1/4 px-2">
        <input
          name="nombre"
          type="text"
          placeholder="Nombre"
          className="w-full border-2 p-1 mt-1 bg-transparent   outline-none focus:ring-0 border-gray-100 rounded-xl"
          onChange={handleFiltros}
        />
      </div>
      <div className="w-1/4 md:w-1/2 lg:w-1/4 px-2">
        <input
          name="marca"
          type="text"
          placeholder="Marca"
          className="w-full border-2 p-1 mt-1 bg-transparent   outline-none focus:ring-0 border-gray-100 rounded-xl"
          onChange={handleFiltros}
        />
      </div>
      <div className="w-1/4 md:w-1/2 lg:w-1/4 px-2">
        <input
          name="modelo"
          type="text"
          placeholder="Modelo"
          className="w-full border-2 p-1 mt-1 bg-transparent   outline-none focus:ring-0 border-gray-100 rounded-xl"
          onChange={handleFiltros}
        />
      </div>
      <div className="w-1/4 md:w-1/2 lg:w-1/4 px-2">
        <input
          name="anio"
          type="text"
          placeholder="Año"
          className="w-full border-2 p-1 mt-1 bg-transparent   outline-none focus:ring-0 border-gray-100 rounded-xl"
          onChange={handleFiltros}
        />
      </div>
      <div className="w-1/4 sm:w-1/5 md:w-1/4 lg:w-1/4 px-2">
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-xl flex justify-between"
          onClick={buscarPiezas}
        >
          Buscar
          <Search />
        </button>
      </div>
    </div>
  );
};

export default Filtrado;
